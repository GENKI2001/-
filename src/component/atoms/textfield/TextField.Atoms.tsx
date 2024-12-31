import React, { ChangeEvent } from 'react';
import './TextField.Atoms.css';

interface TextFieldProps {
  label: string;
  value: string;
  onChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  placeholder?: string;
  error: string | null;
  max?: number;
  type?: string;
  input_class_name?: string;
  rows?: number;
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
};

export default TextFieldAtoms;
