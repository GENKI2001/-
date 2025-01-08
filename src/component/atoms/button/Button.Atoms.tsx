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
    size = 'small',
    width,
    height,
    padding,
  }) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`button-atoms ${size} ${className}`}
        style={{ width, padding, height }}
      >
        {children}
      </button>
    );
  },
);

export default ButtonAtoms;
