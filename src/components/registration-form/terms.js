import React, { Component } from 'react';
import LanguageApi from '../../api/language-api';

/*
* Terms and Condition component
*/
const TermsAndConditions = (props) => {
  let termAndConditionsText = !!props.url
    ? LanguageApi.translate('app-modules.register.tos_notice')
    : LanguageApi.translate('app-modules.register.tos_notice_no_location_tos');

  return(
    <div className="padding-top-20">
      <p dangerouslySetInnerHTML={{__html: termAndConditionsText}}></p>
    </div>
  );
}

export default TermsAndConditions;
