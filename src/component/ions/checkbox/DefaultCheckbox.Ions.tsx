import React from 'react';
import CheckboxAtoms from '../../atoms/checkbox/Checkbox.Atoms';
import { CheckboxAtomsProps } from '../../atoms/checkbox/Checkbox.type';

const DefaultCheckboxIons: React.FC<CheckboxAtomsProps> = React.memo(
  (props) => {
    return <CheckboxAtoms {...props} />;
  },
);

export default DefaultCheckboxIons;
