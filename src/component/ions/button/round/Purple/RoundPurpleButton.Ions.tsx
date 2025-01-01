import React from 'react';
import ButtonAtoms from '../../../../atoms/button/Button.Atoms';
import { ButtonAtomsProps } from '../../../../atoms/button/Button.type';
import '../ButtonRound.css';

const RoundPurpleButtonIons: React.FC<ButtonAtomsProps> = (props) => {
  return (
    <ButtonAtoms {...props} className={'button-round button-filled-purple'} />
  );
};

export default RoundPurpleButtonIons;
