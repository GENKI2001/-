import React from 'react';
import { TextAtoms } from '../../../atoms/text/Text.Atoms';
import { TextAtomsProps } from '../../../atoms/text/Text.type';
import './SelectedTabText.Ions.css';

interface TextTabProps extends TextAtomsProps {
  selected?: boolean;
}

export const SelectedTabTextIons: React.FC<TextTabProps> = React.memo(
  (props) => (
    <TextAtoms
      {...props}
      size={props.size || 'small'}
      className={`selected-tab-text-ions ${props.selected ? 'selected' : ''}`}
    />
  ),
);
