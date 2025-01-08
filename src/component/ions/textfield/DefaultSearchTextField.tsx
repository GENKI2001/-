import React from 'react';
import SearchTextFieldAtoms from '../../atoms/textfield/search/SearchTextField.Atoms';
import { SearchTextFieldAtomsProps } from '../../atoms/textfield/search/SearchTextField.type';

const DefaultSearchTextFieldIons: React.FC<SearchTextFieldAtomsProps> =
  React.memo((props) => {
    return <SearchTextFieldAtoms {...props} />;
  });

export default DefaultSearchTextFieldIons;
