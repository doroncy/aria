import React from 'react';
import LanguageApi from '../../api/language-api';
import ConfigApi from '../../api/config-api';

/*
* Simple Registration Form Complete Message Component
*/
const CompleteMsg = () => {
  let completedContent = ConfigApi.global.isDesktop
    ? LanguageApi.translate('app-modules.register.completed.content.desktop_device')
    : LanguageApi.translate('app-modules.register.completed.content');

  return (
    <div className="block animated-fast slideInDown">
      <h3 className="block-title">{LanguageApi.translate('app-modules.register.completed.title')}</h3>
      <div className="inner-block web-form-element">
        <div translate="app-modules.register.completed.content">{completedContent}</div>
      </div>
    </div>
  );
};


export default CompleteMsg;
