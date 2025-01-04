import React from 'react';
import ButtonAtoms from '../../../atoms/button/Button.Atoms';
import { ButtonAtomsProps } from '../../../atoms/button/Button.type';
import './Button.Atoms.css';

const DefaultButtonIons: React.FC<ButtonAtomsProps> = React.memo((props) => {
  return <ButtonAtoms {...props} />;
});

export default DefaultButtonIons;
