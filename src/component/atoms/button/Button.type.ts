import { ReactNode } from 'react';

export type ButtonAtomsProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  isMobile?: boolean;
  size?: ButtonAtomsSizeType;
  width?: string | number;
  padding?: string | number;
};

export type ButtonAtomsSizeType =
  | 'extra-small'
  | 'small'
  | 'normal'
  | 'medium'
  | 'large'
  | 'extra-large';
