import React from 'react';
import './RadioButton.Atoms.css';
import { RadioButtonSizeTypeAtoms } from './RadioButton.type';

type RadioButtonProps = {
  checked: boolean;
  onClick: () => void;
  isMobile?: boolean;
  size?: RadioButtonSizeTypeAtoms;
  children?: React.ReactNode;
};

const RadioButtonAtoms: React.FC<RadioButtonProps> = ({
  checked,
  onClick,
  isMobile,
  size = 'small',
  children,
}) => {
  return (
    <section className="radio-button-wrapper">
      <input
        type="radio"
        checked={checked}
        className={`radio-input ${size}`}
        onClick={isMobile ? undefined : onClick}
        onTouchStart={isMobile ? onClick : undefined}
      />
      <div
        className={`radio-button-label`}
        onClick={isMobile ? undefined : onClick}
        onTouchStart={isMobile ? onClick : undefined}
      >
        {children}
      </div>
    </section>
  );
};

export default RadioButtonAtoms;
