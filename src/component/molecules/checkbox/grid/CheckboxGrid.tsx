import React from 'react';
import CheckboxAtoms from '../../../atoms/checkbox/Checkbox.Atoms';
import { CheckboxAtomsProps } from '../../../atoms/checkbox/Checkbox.type';
import './CheckboxGrid.css';

interface CheckboxGridProps {
  options: CheckboxAtomsProps[];
  columns?: number;
}

const CheckboxGrid: React.FC<CheckboxGridProps> = ({
  options,
  columns = 3,
}) => {
  return (
    <div
      data-testid="checkbox-grid"
      className={`grid-container columns-${columns}`}
    >
      {options.map((option, index) => (
        <CheckboxAtoms
          key={index}
          label={option.label}
          checked={option.checked}
          disabled={option.disabled}
          onChange={() => option.onChange()}
        />
      ))}
    </div>
  );
};

export default CheckboxGrid;
