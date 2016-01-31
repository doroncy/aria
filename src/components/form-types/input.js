import React from 'react';
import FormTypes from './form-types';

const InputField = ({formField, formFieldType, fieldValue, onChangeFn}) => {
  let className = `clearfix form-item ${!!formField.required ? 'required': ''} ${!!formField.errorMessage ? 'error': ''}`;

  if (formFieldType === 'date' && !!fieldValue) {
    fieldValue = `${fieldValue.year}-${fieldValue.month}-${fieldValue.day}`;
  }

  let titleAndDescription = <label htmlFor={formField.name}>{formField.title}</label>;
  if(!!formField.description) {
    titleAndDescription = (
      <div>
        <div className="clearfix">
          <label htmlFor={formField.name}>{formField.title}</label>
        </div>
        <div className="label-description locale-text-align">{formField.description}</div>
      </div>      
    );
  }

  return (
    <div className={className}>
      {titleAndDescription}
      <input
        type={formFieldType || 'text'}
        name={formField.name}
        onChange={onChangeFn}
        value={fieldValue}
        checked={formFieldType === 'checkbox' && !!fieldValue ? 'checked' : null}
      />
    <div className='validation-message'>{formField.errorMessage}</div>
    </div>
  );
};

//Init
FormTypes.addItem(['text', 'string', 'number', 'date', 'password', 'checkbox'], InputField);

export default InputField;
