import React from 'react';
import './Checkbox.Atoms.css';
import { CheckboxAtomsProps } from './Checkbox.type';

const CheckboxAtoms: React.FC<CheckboxAtomsProps> = React.memo(
  ({ label, checked, onChange, disabled = false }) => {
    return (
      <div
        className="checkbox-atoms-container"
        onClick={() => {
          if (!disabled) {
            onChange();
          }
        }}
      >
        <input
          type="checkbox"
          data-testid="checkbox-atoms-input"
          checked={checked}
          disabled={disabled}
          className="checkbox-atoms-input"
        />
        <label
          className="checkbox-atoms-label"
          data-testid="checkbox-atoms-label"
        >
          {label}
        </label>
      </div>
    );
  },
);

export default CheckboxAtoms;
