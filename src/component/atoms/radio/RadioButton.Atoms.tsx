import React from 'react';
import './RadioButton.Atoms.css';
import { RadioButtonAtomsProps } from './RadioButton.type';

const RadioButtonAtoms: React.FC<RadioButtonAtomsProps> = ({
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
