import React from 'react';
import ButtonAtoms from '../../../../atoms/button/Button.Atoms';
import { ButtonAtomsProps } from '../../../../atoms/button/Button.type';
import '../ButtonFullRound.css';
import './../../Button.Ions.css';

const FullRoundWhiteButtonIons: React.FC<ButtonAtomsProps> = React.memo(
  (props) => {
    return (
      <ButtonAtoms
        {...props}
        className={'button-full-round-ions button-filled-white'}
      />
    );
  },
);

export default FullRoundWhiteButtonIons;
