import React from 'react';
import ButtonAtoms from '../../../atoms/button/Button.Atoms';
import { ButtonAtomsProps } from '../../../atoms/button/Button.type';
import './SelectedButton.Ions.css';

interface ButtonProps extends ButtonAtomsProps {
  selected?: boolean;
}

const SelectedTabButtonIons: React.FC<ButtonProps> = React.memo((props) => {
  return (
    <ButtonAtoms
      {...props}
      className={`selected-tab-button-ions ${props.selected ? 'selected' : ''}`}
      size={props.size || 'normal'}
    />
  );
});

export default SelectedTabButtonIons;
