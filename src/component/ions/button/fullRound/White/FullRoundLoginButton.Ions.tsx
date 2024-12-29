import React from 'react';
import ButtonAtoms from '../../../../atoms/button/Button.Atoms';
import '../ButtonFullRound.css';
import './../../Button.Ions.css';
import './FullRoundLoginButton.Ions.css';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  isMobile?: boolean;
}

const FullRoundLoginButtonIons: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  isMobile,
}) => {
  return (
    <ButtonAtoms
      onClick={onClick}
      disabled={disabled}
      isMobile={isMobile}
      className={'button-full-round full-round-login-button-ions'}
      size="small"
    >
      ログイン
    </ButtonAtoms>
  );
};

export default FullRoundLoginButtonIons;
