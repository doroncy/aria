import React, { Component } from 'react';
import _ from 'lodash';
import Fetch from '../../utils/fetch/fetch';
import LanguageApi from '../../api/language-api';
import LocationApi from '../../api/location-api';
import DeviceBridge from '../../utils/device-bridge/device-bridge';
import FormTypes from '../form-types/form-types';

/*
* Phone Verification Code Form Component
*/
export default class PhoneVerificationForm extends Component {
  constructor(props) {
    super();

    this.state = {
      phoneField: {
        name: 'phone',
        title: LanguageApi.translate('app-modules.verification_code'),
        type: 'text'
      },
      code: '',
      errorMsg:'',
      translatedErrorMsg: '',
      isSubmitting: false
    };

    this.verifyPhoneNumber = this.verifyPhoneNumber.bind(this);
    this.verificationCodeChange = this.verificationCodeChange.bind(this);
    this.handleVerificationResponse = this.handleVerificationResponse.bind(this);
  }

  render() {
    let errorMsg = buildErrorMessageComponent(this.state.errorMsg, this.state.translatedErrorMsg);
    let phoneInputComponent = FormTypes.getItemComponent(this.state.phoneField, this.state.code, this.verificationCodeChange);

    return (
      <div>
        <div className="block animated-fast slideInDown">
          <h3 className="block-title">{LanguageApi.translate('app-modules.register.verification.phonenumber.title')}</h3>
          <div className="inner-block web-form-element">
            <div>
              {phoneInputComponent}
            </div>
            <div className="row">
              <button className="location-color-button text-align-center small-12 columns"
                onClick={this.verifyPhoneNumber}>
                {LanguageApi.translate('app-modules.register.verification.phonenumber.submit')}
              </button>
            </div>
          </div>
        </div>
        {errorMsg}
      </div>
    );
  }

  verificationCodeChange(id, event) {
    this.setState({
      code: event.target.value
    });
  }

  verifyPhoneNumber() {
    if (!this.state.isSubmitting) {
      this.setState({
        errorMsg: '',
        translatedErrorMsg: '',
        isSubmitting: true,
      });

      let data = (_.map(_.values(this.props.filledFormData), (item) => {
        return JSON.stringify(item);
      }));

      Fetch.post('appUser/RegisterUserByPhoneNumber', {
        dataType: 'form-urlencoded',
        data: {
          verificationcode: this.state.code,
          location_id: LocationApi.locationId,
          token: this.props.formDataToken,
          data: data
        }
      })
      .then(this.handleVerificationResponse);
    }
  }

  handleVerificationResponse(response) {
    let stateStatus = {};
    response = response || {};

    if (response.status === 'done') {
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

    this.props.updateState(response.status);
  }
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
