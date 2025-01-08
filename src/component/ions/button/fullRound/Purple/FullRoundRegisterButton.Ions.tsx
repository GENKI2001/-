import React from 'react';
import ButtonAtoms from '../../../../atoms/button/Button.Atoms';
import { ButtonAtomsProps } from '../../../../atoms/button/Button.type';
import '../ButtonFullRound.css';
import './../../Button.Ions.css';

const FullRoundRegisterButtonIons: React.FC<
  Omit<ButtonAtomsProps, 'children'>
> = React.memo((props) => {
  return (
    <ButtonAtoms
      {...props}
      className={
        'button-full-round-ions button-filled-purple round-register-button-ions'
      }
    >
      新規会員登録
    </ButtonAtoms>
  );
});

export default FullRoundRegisterButtonIons;
