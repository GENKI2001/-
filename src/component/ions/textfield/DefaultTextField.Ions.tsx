import React from 'react';
import TextFieldAtoms from '../../atoms/textfield/TextField.Atoms';
import { TextFieldAtomsProps } from '../../atoms/textfield/TextField.type';

const DefaultTextFieldIons: React.FC<TextFieldAtomsProps> = (props) => {
  return <TextFieldAtoms {...props} />;
};

export default DefaultTextFieldIons;
