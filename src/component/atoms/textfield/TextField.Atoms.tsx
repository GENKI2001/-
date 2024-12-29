import React, { ChangeEvent } from 'react';
import './TextField.Atoms.css';

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error: string | null;
  max?: number;
  type?: string;
  input_class_name?: string;
}

const TextFieldAtoms: React.FC<TextFieldProps> = ({
  label,
  value,
  onChange,
  placeholder = '',
  error,
  max,
  type = 'text',
  input_class_name,
}) => {
  return (
    <div className="textfield-container">
      <label className="textfield-label">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`textfield-input ${error ? 'textfield-input-error' : ''} ${input_class_name ?? ''}`}
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
};

export default TextFieldAtoms;
