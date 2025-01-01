import { ChangeEvent } from 'react';

export interface TextFieldAtomsProps {
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
