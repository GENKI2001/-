import React from 'react';
import SelectorAtoms from '../../atoms/selector/Selector.Atoms';
import { SelectorAtomsProps } from '../../atoms/selector/Selector.type';

const DefaultSelectorIons: React.FC<SelectorAtomsProps> = React.memo(
  (props) => {
    return <SelectorAtoms {...props} />;
  },
);

export default DefaultSelectorIons;
