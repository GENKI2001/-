import React from 'react';
import RadioButtonAtoms from '../../atoms/radio/RadioButton.Atoms';
import { RadioButtonAtomsProps } from '../../atoms/radio/RadioButton.type';

const DefaultRadioButtonIons: React.FC<RadioButtonAtomsProps> = React.memo(
  (props) => {
    return <RadioButtonAtoms {...props} />;
  },
);

export default DefaultRadioButtonIons;
