import React, { ReactNode } from 'react';
import PopupAtoms from '../../atoms/popup/Popup.Atoms';
import { PopupSizeTypeAtoms } from '../../atoms/popup/type/PopupSizeType.Atoms';

interface PopupProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  size?: PopupSizeTypeAtoms;
}

const DefaultPopupIons: React.FC<PopupProps> = ({
  open,
  onClose,
  children,
  size,
}) => {
  return (
    <PopupAtoms open={open} onClose={onClose} size={size}>
      {children}
    </PopupAtoms>
  );
};

export default DefaultPopupIons;
