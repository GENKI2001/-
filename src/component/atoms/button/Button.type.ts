import { ReactNode } from 'react';

export type ButtonAtomsProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  size?: ButtonSizeType;
  width?: string | number;
  height?: string | number;
  padding?: string | number;
};

export type ButtonSizeType =
  | 'extra-small'
  | 'small'
  | 'normal'
  | 'medium'
  | 'large'
  | 'extra-large';
