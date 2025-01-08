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
    design_type = 'default',
    size = 'medium',
  }) => {
    const InputComponent = rows ? 'textarea' : 'input';

    return (
      <div className="textfield-container">
        {label && <label className={`textfield-label ${size}`}>{label}</label>}
        <InputComponent
          role="textfield-input"
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${design_type === 'underline' ? 'textfield-input-underline' : 'textfield-input'} ${error ? 'textfield-input-error' : ''} ${size} ${input_class_name ?? ''}`}
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
