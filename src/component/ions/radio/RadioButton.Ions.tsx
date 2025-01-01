import React from 'react';
import RadioButtonAtoms from '../../atoms/radio/RadioButton.Atoms';
import { RadioButtonSizeTypeAtoms } from '../../atoms/radio/type/RadioButtonSizeType.Atoms';

type RadioButtonProps = {
  checked: boolean;
  onClick: () => void;
  isMobile?: boolean;
  size?: RadioButtonSizeTypeAtoms;
  children?: React.ReactNode;
};

const RadioButtonIons: React.FC<RadioButtonProps> = ({
  checked,
  onClick,
  isMobile,
  size = 'small',
  children,
}) => {
  return (
    <RadioButtonAtoms
      checked={checked}
      onClick={onClick}
      isMobile={isMobile}
      size={size}
    >
      {children}
    </RadioButtonAtoms>
  );
};

export default RadioButtonIons;
