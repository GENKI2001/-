import { ReactNode } from 'react';

export type PopupAtomsSizeType =
  | 'extra-small'
  | 'small'
  | 'normal'
  | 'medium'
  | 'large'
  | 'extra-large';

export type PopupAtomsProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: PopupAtomsSizeType;
};
