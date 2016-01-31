import React from 'react';
import FormTypes from './form-types';

const Textarea = ({formField, fieldValue, onChangeFn}) => {
  let className = `clearfix form-item ${!!formField.required ? 'required': ''} ${!!formField.errorMessage ? 'error': ''}`;

  return (
    <div className={className}>
      <label>{formField.title}</label>
      {(() => {
        if(!!formField.description) {
          return <div className="label-description locale-text-align">{formField.description}</div>
        }
      })()}
      <textarea onChange={onChangeFn} value={fieldValue}></textarea>
      <div className='validation-message'>{formField.errorMessage}</div>
    </div>
  );
};

// Init
FormTypes.addItem('textarea', Textarea);

export default Textarea;
