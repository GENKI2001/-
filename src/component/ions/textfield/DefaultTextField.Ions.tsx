import React, { ChangeEvent } from 'react';
import TextFieldAtoms from '../../atoms/textfield/TextField.Atoms';

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

const DefaultTextFieldIons: React.FC<TextFieldProps> = ({
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
  return (
    <TextFieldAtoms
      label={label}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      error={error}
      max={max}
      type={type}
      rows={rows}
      input_class_name={input_class_name}
    />
  );
};

export default DefaultTextFieldIons;
