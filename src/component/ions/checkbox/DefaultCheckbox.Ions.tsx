import React from 'react';
import CheckboxAtoms from '../../atoms/checkbox/Checkbox.Atoms';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
}

const DefaultCheckboxIons: React.FC<CheckboxProps> = ({
  label,
  checked,
  onChange,
  disabled,
}) => {
  return (
    <CheckboxAtoms
      label={label}
      checked={checked}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default DefaultCheckboxIons;
