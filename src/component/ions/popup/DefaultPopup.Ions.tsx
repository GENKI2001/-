import React, { ReactNode } from 'react';
import PopupAtoms from '../../atoms/popup/Popup.Atoms';

interface PopupProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const DefaultPopupIons: React.FC<PopupProps> = ({
  open,
  onClose,
  children,
}) => {
  return (
    <PopupAtoms open={open} onClose={onClose}>
      {children}
    </PopupAtoms>
  );
};

export default DefaultPopupIons;
