import React from 'react';
import ButtonAtoms from '../../../atoms/button/Button.Atoms';
import { ButtonAtomsProps } from '../../../atoms/button/Button.type';
import './SelectedButton.Ions.css';

interface ButtonProps extends ButtonAtomsProps {
  selected?: boolean;
}

const SelectedWhiteRoundButtonIons: React.FC<ButtonProps> = React.memo(
  (props) => {
    return (
      <ButtonAtoms
        {...props}
        className={`selected-white-round-button-ions ${props.selected ? 'selected' : ''}`}
      />
    );
  },
);

export default SelectedWhiteRoundButtonIons;
