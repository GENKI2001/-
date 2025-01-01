import React, { ReactNode } from 'react';
import './Button.Atoms.css';
import { ButtonSizeTypeAtoms } from './Button.type';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  isMobile?: boolean;
  size?: ButtonSizeTypeAtoms;
  width?: string | number;
  padding?: string | number;
}

const ButtonAtoms: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  disabled,
  isMobile,
  size = 'small',
  width,
  padding,
}) => {
  return (
    <button
      onTouchStart={isMobile ? (disabled ? undefined : onClick) : undefined}
      onClick={isMobile ? undefined : disabled ? undefined : onClick}
      disabled={disabled}
      className={`button-atoms ${size} ${className} `}
      style={{ width, padding }}
    >
      {children}
    </button>
  );
};

export default ButtonAtoms;
