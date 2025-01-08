import React from 'react';
import ButtonAtoms from '../../../../atoms/button/Button.Atoms';
import { ButtonSizeType } from '../../../../atoms/button/Button.type';
import '../ButtonCircle.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isMobile?: boolean;
  size?: ButtonSizeType;
}

const CircleFixedPinkButtonIons: React.FC<ButtonProps> = React.memo((props) => {
  return (
    <ButtonAtoms
      onClick={props.onClick}
      disabled={props.disabled}
      className={`button-circle-ions ${props.size ?? 'small'} button-filled-pink`}
      size={props.size}
    >
      {props.children}
    </ButtonAtoms>
  );
});

export default CircleFixedPinkButtonIons;
