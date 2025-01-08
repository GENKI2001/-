import { ChangeEvent } from 'react';

export type TextFieldSizeType = 'small' | 'medium' | 'large';

export interface TextFieldAtomsProps {
  label: React.ReactNode | null;
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
  design_type?: 'default' | 'underline';
  size?: TextFieldSizeType;
}
