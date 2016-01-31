import React, { Component } from 'react';

import Fetch from '../../utils/fetch/fetch';
import LocationApi from '../../api/location-api';
import LanguageApi from '../../api/language-api';
import ConfigApi from '../../api/config-api';
import RegForm from './reg-form';
import CompleteMsg from './complete-msg'
import PhoneVerification from './phone-verification'


/*
* Form States
* - New: The registration form
* - Complete: The successful registration message
* - PhoneVerification: The SMS verification code page if the form is configured to have phone verification
*/
const pageStates = {
  'Loading': 'Loading',
  'New': 'New',
  'Complete': 'Complete',
  'PhoneVerification': 'PhoneVerification'
};


export default class RegFormRoute extends Component {
  constructor(props) {
    super();

    this.state = {
      RegFormData: {},
      filledFormData: {},
      pageState: pageStates.Loading
    };

    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    this.initRegFormData()
      .then(initLanguage)
      .then(() => {
        // Update the BODY html tag with relvent class names
        let isTrasperentBgClassName = ConfigApi.global.transparentBackground
          ? 'background-transparent'
          : '';
        document.getElementsByTagName('body')[0].className+=`${isTrasperentBgClassName} direction-${LanguageApi.info.direction}`;

        this.setState({
          pageState: pageStates.New
        });
      });
  }

  render() {
    let pageHtml = '';

    switch (this.state.pageState) {
      case pageStates.Loading:
        pageHtml = <div className="loading-form"></div>;
        break;
      case pageStates.New:
        pageHtml = <RegForm formData={this.state.RegFormData} updateState={this.updateState} />;
        break;
      case pageStates.Complete:
        pageHtml = <CompleteMsg />
        break;
      case pageStates.PhoneVerification:
        pageHtml = <PhoneVerification formDataToken={this.state.RegFormData.token} filledFormData={this.state.filledFormData} updateState={this.updateState} />
        break;
    }

    return(
      <div>{pageHtml}</div>
    );
  }

  initRegFormData() {
    return getRegFormData()
      .then((response) => {
        response = response || {};

        // Filter form fields to be only relevant registration form fields
        // and make sure the fields are in the correct order
        response.fields = response.fields
          .filter(filterRegFormFields)
          .sort(sortByFieldsOrder);

        this.state.RegFormData = response;

        return response;
      });
  }

  updateState(status, filledFormData) {
    let stateStatus = this.state.pageState;

    switch (status) {
      case 'done':
        stateStatus = pageStates.Complete;
        break;
      case 'verification':
        stateStatus = pageStates.PhoneVerification;
        break;
    }

    this.setState({
      pageState: stateStatus,
      filledFormData: filledFormData
        ? filledFormData
        : this.state.filledFormData
    });
  }
}

///////////////

function getRegFormData() {
  return Fetch.get(`appUser/LoadData?fields=true&location_id=${LocationApi.locationId}`);
}

function initLanguage(regFormData) {
  let lanaguageInfo = regFormData.lang || {};
  return LanguageApi.init(lanaguageInfo);
}

function filterRegFormFields(field) {
  return field.status !== 'hidden' && field.show_on_register == 'Y';
}

function sortByFieldsOrder(fieldA, fieldB) {
  let fieldAOrder = parseInt(fieldA.order);
  let fieldBOrder = parseInt(fieldB.order);

  if (fieldAOrder < fieldBOrder) {
    return -1;
  } else if (fieldAOrder > fieldBOrder) {
    return 1;
  } else {
    return 0;
  }
}
