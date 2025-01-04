import React from 'react';
import SelectorAtoms from '../../atoms/selector/Selector.Atoms';
import { SelectorAtomsProps } from '../../atoms/selector/Selector.type';

const DefaultSelectorIons: React.FC<SelectorAtomsProps> = React.memo(
  ({
    options = [],
    value = '',
    label,
    onChange = () => console.log('onChange'),
    placeholder = '選択してください',
    disabled = false,
  }) => {
    return (
      <SelectorAtoms
        label={label}
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    );
  },
);

export default DefaultSelectorIons;
