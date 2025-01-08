import React from 'react';
import './RadioButton.Atoms.css';
import { RadioButtonAtomsProps } from './RadioButton.type';

const RadioButtonAtoms: React.FC<RadioButtonAtomsProps> = React.memo(
  ({ checked, onChange, size = 'small', children }) => {
    return (
      <label className={`radio-button-wrapper`}>
        <input
          type="radio"
          checked={checked}
          onChange={onChange}
          className={`radio-input ${size}`}
        />
        <div className={`radio-button-label`}>{children}</div>
      </label>
    );
  },
);

export default RadioButtonAtoms;
