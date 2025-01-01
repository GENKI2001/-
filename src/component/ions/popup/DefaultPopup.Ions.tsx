import React from 'react';
import PopupAtoms from '../../atoms/popup/Popup.Atoms';
import { PopupAtomsProps } from '../../atoms/popup/Popup.type';

const DefaultPopupIons: React.FC<PopupAtomsProps> = (props) => {
  return <PopupAtoms {...props} />;
};

export default DefaultPopupIons;
