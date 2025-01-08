import { ChangeEvent } from 'react';

export interface SearchTextFieldAtomsProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch?: (value: string) => void;
  placeholder?: string;
  className?: string;
}
