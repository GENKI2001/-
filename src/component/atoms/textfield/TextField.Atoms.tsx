import React from 'react';
import './TextField.Atoms.css';
import { TextFieldAtomsProps } from './TextField.type';

const TextFieldAtoms: React.FC<TextFieldAtomsProps> = React.memo(
  ({
    label,
    value,
    onChange,
    placeholder = '',
    error,
    max,
    type = 'text',
    input_class_name,
    rows,
  }) => {
    const InputComponent = rows ? 'textarea' : 'input';

    return (
      <div className="textfield-container">
        <label className="textfield-label">{label}</label>
        <InputComponent
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`textfield-input ${error ? 'textfield-input-error' : ''} ${input_class_name ?? ''}`}
          rows={rows}
        />
        <section className="textfield-error-max-container">
          {error && <div className="textfield-error">{error}</div>}
          {max && (
            <div
              className={`textfield-counter ${value.length >= max ? 'max' : ''}`}
            >
              {value.length} / {max}
            </div>
          )}
        </section>
      </div>
    );
  },
);

export default TextFieldAtoms;
