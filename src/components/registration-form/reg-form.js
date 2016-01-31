import React, { Component } from 'react';
import _ from 'lodash';
import RegFormStyle from './reg-form.scss';
import Fetch from '../../utils/fetch/fetch';
import DeviceBridge from '../../utils/device-bridge/device-bridge';
import LocationApi from '../../api/location-api';
import LanguageApi from '../../api/language-api';
import ConfigApi from '../../api/config-api';
import FormTypes from '../form-types/form-types';
import InputType from '../form-types/input';
import TextArea from '../form-types/textarea';
import Options from '../form-types/options';
import SubmitBtns from './submit-btns';
import TermsAndConditions from './terms';


export default class RegForm extends Component {
  constructor(props) {
    super();

    // State Object
    // - filledFormData: This is the object that is being send to the server and contains the fields values.
    // - errorMsg: This is the form error message code that arrives from the server.
    // - translatedErrorMsg: Sometimes the server sends a transalted error messages and not error code, this is the translated one.
    // - isSubmitting: a flag representing that the current form is being submited, so no further clicks should be handled.
    this.state = {
      filledFormData: {},
      errorMsg:'',
      translatedErrorMsg: '',
      isSubmitting: false
    };

    // Bind the class methods to this object
    this.submitForm = this.submitForm.bind(this);
    this.handleFormItemChange = this.handleFormItemChange.bind(this);
    this.initFormData = this.initFormData.bind(this);
    this.handleVerificationResponse = this.handleVerificationResponse.bind(this);
  }

  componentDidMount() {
    // Init Page
    this.initFormData(this.props.formData);
  }

  render() {
    let pageHtml = '';
    let _this = this;

    // Build error message
    let errorMsg = buildErrorMessageComponent(this.state.errorMsg, this.state.translatedErrorMsg);

    let formFields = this.props.formData.fields.map(formField => {
      // get default field value (if something is store in the lcoal storage get it from there)
      let fieldValue = _this.state.filledFormData[formField.constant_id]
        ? _this.state.filledFormData[formField.constant_id].value
        : '';

      return (
        <div key={formField.id}>
          {FormTypes.getItemComponent(formField, fieldValue, this.handleFormItemChange)}
        </div>
      );
    });

    pageHtml =
      <div className="block">
        <h3 className="block-title">{LanguageApi.translate('app-modules.register.title')}</h3>
        <div className="inner-block web-form-element">
          {formFields}
          <TermsAndConditions url={this.props.formData.location.toc_url} />
          <div className={this.state.isSubmitting ? 'disable-btns' : ''}>
            <SubmitBtns canSkip={!!this.props.formData.can_skip} submitFn={this.submitForm} skipFn={this.submitForm} />
          </div>
        </div>
      </div>

    return(
      <div>
        {pageHtml}
        {errorMsg}
        {(()=> {
          if (ConfigApi.global.isDesktop) {
            return (<div className="bottom-form-padding"></div>);
          }
        })()}
      </div>
    );
  }

  // Init the form data object from the fields data that the server return
  initFormData(formData) {
    let filledFormData = JSON.parse(localStorage.getItem('filledFormData')) || {};

    if (formData) {
      formData.fields.forEach((field, index) => {
        let fieldName = _.has(field.form_fields_field_type.name) ? field.form_fields_field_type.name : field.name;
        let fieldType = _.has(field.form_fields_field_type.type) ? field.form_fields_field_type.type : field.type;

        if (filledFormData[field.constant_id]) {
          field.value = filledFormData[field.constant_id].value;
        }

        this.state.filledFormData[field.constant_id] = {
          constant_id: field.constant_id,
          name: fieldName,
          type: fieldType,
          value: field.value || ''
        };
      });

      // run form validation if some data was saved in the local storage, beacuse this
      // mean the user already had interaction with form
      if (!_.isEmpty(filledFormData)) {
        this.validateForm();
      }
    }
  }

  // Handle form item change event:
  // - Sets the new field item value
  // - Run field validation for real time error messages
  // - Save form fields data to local storge
  handleFormItemChange(id, event) {
    let value = event.target.value;

    if (event.target.type === 'date') {
      value = generateSplitedDateObject(event.target.value);
    } else if (event.target.type === 'checkbox') {
      value = !!event.target.checked;
    }
    let component = _.find(this.props.formData.fields, {constant_id: id});

    let isValidComponent = this.validateComponent(component, value)

    this.state.filledFormData[id].value = value;
    localStorage.setItem('filledFormData', JSON.stringify(this.state.filledFormData));

    this.forceUpdate();
  }

  // Client side field validation check
  validateComponent(component, value) {
    if (component) {
      component.errorMessage = '';

      if (!!component.required && !value) {
        component.errorMessage = LanguageApi.translate('app-modules.validation.required');
      } else if (component.input_maxlength > 0 && _.size(value) > component.input_maxlength) {
        component.errorMessage = LanguageApi.translate('app-modules.validation.maxlength')
          .replace(/{{value}}/, component.input_maxlength);
      } else if (component.input_minlength > 0 && _.size(value) < component.input_minlength) {
        component.errorMessage = LanguageApi.translate('app-modules.validation.minlength')
          .replace(/{{value}}/, component.input_minlength);
      } else if (!!component.input_pattern) {
        let regExp = _.isRegExp(component.input_pattern)
          ? component.input_pattern
          : new RegExp(`^${component.input_pattern}$`);

        if (!regExp.exec(value)) {
          component.errorMessage = LanguageApi.translate('app-modules.validation.pattern');
        }
      }
      return _.isEmpty(component.errorMessage);
    } else {
      return true;
    }
  }

  validateForm() {
    let isFormValid = true;

    _.forEach(this.state.filledFormData, (formItem) => {
      let component = _.find(this.props.formData.fields, {constant_id: formItem.constant_id});
      let isValidComponent = this.validateComponent(component, formItem.value);

      if (!isValidComponent) {
        isFormValid = false;
      }
    });

    this.forceUpdate();
    return isFormValid;
  }

  // Form submit handler
  submitForm(event) {
    event.stopPropagation();
    event.preventDefault();

    if (!this.state.isSubmitting) {
      this.setState({
        errorMsg: '',
        translatedErrorMsg: '',
        isSubmitting: true,
      });

      let isFormValid = this.validateForm();

      if (isFormValid) {
        let data = (_.map(_.values(this.state.filledFormData), (item) => {
          return JSON.stringify(item);
        }));

        Fetch.post('appUser/RegistrationVerifyFields', {
          dataType: 'form-urlencoded',
          data: {
            location_id: LocationApi.locationId,
            token: this.props.formData.token,
            data: data
          }
        })
        .then(this.handleVerificationResponse);
      } else {
        this.setState({isSubmitting: false});
      }
    }
  }

  // Updates the page state according to the server response values
  handleVerificationResponse(response) {
    let stateStatus = {};
    response = response || {};

    if (response.status === 'done') {
      // Clear saved form data from local storage
      localStorage.removeItem('filledFormData');

      // Send device notification for successful registration
      DeviceBridge.send({
        "Type": "Action",
        "Content": [{"name": "actionsAfterRegistration", "params": ""}]
      });
    }

    this.setState({
      errorMsg: response.error || response.message || '',
      translatedErrorMsg: !!response.result ? response.result.ErrorMessage || '' : '',
      isSubmitting: false
    });

    this.props.updateState(response.status, this.state.filledFormData);
  }
};

/////////////////////

// Splits a date string to object with month/day/year for server APIs
function generateSplitedDateObject(dateString) {
  let date = new Date(dateString);

  return {
    month: _.padLeft((date.getMonth()+1).toString(), 2, '0'),
    day: _.padLeft((date.getDate()).toString(), 2, '0'),
    year: (date.getFullYear()).toString()
  };
}

// Builds the correct error message component according to the page error status
// the server sometimes return a tranmslated string or error code, this method is an
// abstraction ontop of it for an easier use.
function buildErrorMessageComponent(errorMsgCode, translatedErrorMsg) {
  let errorMsgText = ''

  if (_.size(translatedErrorMsg) > 0) {
    errorMsgText = translatedErrorMsg || '';
  } else {
    errorMsgText = LanguageApi.translate(`app-modules.register.errors.${errorMsgCode}`) || '';
  }

  return (!!errorMsgText)
    ? <div className="block error">{errorMsgText}</div>
    : '';
}
