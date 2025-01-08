import React from 'react';
import ButtonAtoms from '../../../../atoms/button/Button.Atoms';
import { ButtonAtomsProps } from '../../../../atoms/button/Button.type';
import '../ButtonFullRound.css';
import './../../Button.Ions.css';
import './FullRoundLoginButton.Ions.css';

const FullRoundLoginButtonIons: React.FC<Omit<ButtonAtomsProps, 'children'>> =
  React.memo((props) => {
    return (
      <ButtonAtoms
        {...props}
        className={'button-full-round-ions full-round-login-button-ions'}
      >
        ログイン
      </ButtonAtoms>
    );
  });

export default FullRoundLoginButtonIons;
