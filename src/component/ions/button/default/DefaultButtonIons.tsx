import React from 'react';
import ButtonAtoms from '../../../atoms/button/Button.Atoms';
import { ButtonSizeTypeAtoms } from '../../../atoms/button/Button.type';
import './Button.Atoms.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  isMobile?: boolean;
  width?: string | number;
  padding?: string | number;
  size?: ButtonSizeTypeAtoms;
}

const DefaultButtonIons: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  isMobile,
  width,
  padding,
  size = 'small',
}) => {
  return (
    <ButtonAtoms
      onClick={onClick}
      disabled={disabled}
      isMobile={isMobile}
      width={width}
      padding={padding}
      size={size}
    >
      {children}
    </ButtonAtoms>
  );
};

export default DefaultButtonIons;
