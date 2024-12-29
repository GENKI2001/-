import React from 'react';
import ButtonAtoms from '../../../../atoms/button/Button.Atoms';
import '../ButtonCircle.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isMobile?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const CircleFixedPinkButtonIons: React.FC<ButtonProps> = (props) => {
  return (
    <ButtonAtoms
      onClick={props.onClick}
      disabled={props.disabled}
      isMobile={props.isMobile}
      className={`button-circle ${props.size ?? 'small'} button-filled-pink`}
      size={props.size}
    >
      {props.children}
    </ButtonAtoms>
  );
};

export default CircleFixedPinkButtonIons;
