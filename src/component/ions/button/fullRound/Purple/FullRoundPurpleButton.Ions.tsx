import React from 'react';
import ButtonAtoms from '../../../../atoms/button/Button.Atoms';
import { ButtonAtomsSizeType } from '../../../../atoms/button/Button.type';
import '../ButtonFullRound.css';
import './../../Button.Ions.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isMobile?: boolean;
  size?: ButtonAtomsSizeType;
  width?: string | number;
  padding?: string | number;
}

const FullRoundPurpleButtonIons: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonAtoms
      onClick={props.onClick}
      disabled={props.disabled}
      isMobile={props.isMobile}
      className={'button-full-round button-filled-purple'}
      size={props.size}
      width={props.width}
      padding={props.padding}
    >
      {props.children}
    </ButtonAtoms>
  );
};

export default FullRoundPurpleButtonIons;
