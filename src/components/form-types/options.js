import React from 'react';
import FormTypes from './form-types';

const Options = ({formField, fieldValue, onChangeFn}) => {
  let selectMenu = formField.options.length
    ? (
      <div>
        <label>{formField.title}</label>
        {(() => {
          if(!!formField.description) {
            return <div className="label-description locale-text-align">{formField.description}</div>
          }
        })()}
        <select onChange={onChangeFn} value={fieldValue}>
          <option key="empty" disabled="disabled" value="">{formField.title}</option>
          {formField.options.map((option, index) => {
            return <option key={index} value={option.value}>{option.label}</option>
          })}
        </select>
        <div className='validation-message'>{formField.errorMessage}</div>
      </div>
    )
    : '';

  let className = `clearfix form-item ${!!formField.required ? 'required': ''} ${!!formField.errorMessage ? 'error': ''}`;

  return (
    <div className={className}>
      {selectMenu}
    </div>
  )
};

// Init
FormTypes.addItem('options', Options);

export default Options;
