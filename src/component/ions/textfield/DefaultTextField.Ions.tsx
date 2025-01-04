import React from 'react';
import TextFieldAtoms from '../../atoms/textfield/TextField.Atoms';
import { TextFieldAtomsProps } from '../../atoms/textfield/TextField.type';

const DefaultTextFieldIons: React.FC<TextFieldAtomsProps> = React.memo(
  (props) => {
    return <TextFieldAtoms {...props} />;
  },
);

export default DefaultTextFieldIons;
