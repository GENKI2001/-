import React from 'react';
import './Checkbox.Atoms.css';
import { CheckboxAtomsProps } from './Checkbox.type';

const CheckboxAtoms: React.FC<CheckboxAtomsProps> = React.memo(
  ({ label, checked, onChange, disabled = false, size = 'medium' }) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        onChange();
      }
    };

    return (
      <label
        className={`checkbox-atoms-container ${size} ${disabled ? 'disabled' : ''}`}
      >
        <input
          type="checkbox"
          data-testid="checkbox-atoms-input"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="checkbox-atoms-input"
        />
        <span
          className={`checkbox-atoms-label ${size}`}
          data-testid="checkbox-atoms-label"
        >
          {label}
        </span>
      </label>
    );
  },
);

export default CheckboxAtoms;
