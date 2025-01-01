import React from 'react';
import RadioButtonAtoms from '../../atoms/radio/RadioButton.Atoms';
import { RadioButtonAtomsProps } from '../../atoms/radio/RadioButton.type';

const RadioButtonIons: React.FC<RadioButtonAtomsProps> = (props) => {
  return <RadioButtonAtoms {...props} />;
};

export default RadioButtonIons;
