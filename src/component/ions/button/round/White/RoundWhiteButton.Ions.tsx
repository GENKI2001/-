import React from 'react';
import ButtonAtoms from '../../../../atoms/button/Button.Atoms';
import { ButtonAtomsProps } from '../../../../atoms/button/Button.type';
import '../ButtonRound.css';

const RoundWhiteButtonIons: React.FC<ButtonAtomsProps> = React.memo((props) => {
  return (
    <ButtonAtoms
      {...props}
      className={'button-round-ions button-filled-white'}
    />
  );
});

export default RoundWhiteButtonIons;
