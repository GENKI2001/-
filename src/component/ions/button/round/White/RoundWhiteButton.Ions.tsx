import React from 'react';
import ButtonAtoms from '../../../../atoms/button/Button.Atoms';
import { ButtonAtomsSizeType } from '../../../../atoms/button/Button.type';
import '../ButtonRound.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isMobile?: boolean;
  size?: ButtonAtomsSizeType;
  width?: string | number;
  padding?: string | number;
}

const RoundWhiteButtonIons: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonAtoms
      onClick={props.onClick}
      disabled={props.disabled}
      isMobile={props.isMobile}
      className={'button-round button-filled-white'}
      width={props.width}
      padding={props.padding}
      size={props.size}
    >
      {props.children}
    </ButtonAtoms>
  );
};

export default RoundWhiteButtonIons;
