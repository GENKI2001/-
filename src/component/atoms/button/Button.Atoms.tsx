import React from 'react';
import './Button.Atoms.css';
import { ButtonAtomsProps } from './Button.type';

const ButtonAtoms: React.FC<ButtonAtomsProps> = ({
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
