import React from 'react';
import { TextAtoms } from '../../../atoms/text/Text.Atoms';
import { TextAtomsProps, TextSizeType } from '../../../atoms/text/Text.type';
import './BodySelectedText.Ions.css';

interface TextProps extends TextAtomsProps {
  size?: TextSizeType;
  selected?: boolean;
}

export const BodySelectedTextIons: React.FC<TextProps> = React.memo((props) => (
  <TextAtoms
    {...props}
    size={props.size || 'small'}
    className={`body-selected-text-ions ${props.selected ? 'selected' : ''}`}
  />
));
