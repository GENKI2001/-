import React from 'react';
import './Button.Atoms.css';
import { ButtonAtomsProps } from './Button.type';

// 引数の値が変わらない限り再レンダリングされない
// ただし、再レンダリングの度に関数(onClick)は新しく生成されてしまう。そのため、必ずuseCallbackでラップすること
const ButtonAtoms: React.FC<ButtonAtomsProps> = React.memo(
  ({
    children,
    onClick,
    className = '',
    disabled = false,
    isMobile = false,
    size = 'small',
    width,
    padding,
  }) => {
    return (
      <button
        onTouchStart={isMobile ? (disabled ? undefined : onClick) : undefined}
        onClick={isMobile ? undefined : disabled ? undefined : onClick}
        disabled={disabled}
        className={`button-atoms ${size} ${className}`}
        style={{ width, padding }}
      >
        {children}
      </button>
    );
  },
);

export default ButtonAtoms;
