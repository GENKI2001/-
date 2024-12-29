import React from 'react';
import ButtonAtoms from '../../../../atoms/button/Button.Atoms';
import '../ButtonFullRound.css';
import './../../Button.Ions.css';

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  isMobile?: boolean;
}

const FullRoundRegisterButtonIons: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  isMobile,
}) => {
  return (
    <ButtonAtoms
      onClick={onClick}
      disabled={disabled}
      isMobile={isMobile}
      className={
        'button-full-round button-filled-purple round-register-button-ions'
      }
      size="small"
    >
      新規会員登録
    </ButtonAtoms>
  );
};

export default FullRoundRegisterButtonIons;
