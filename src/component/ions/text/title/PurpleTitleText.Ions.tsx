import React from 'react';
import { TextAtoms } from '../../../atoms/text/Text.Atoms';
import {
  TextAtomsProps,
  TextSizeTypeAtoms,
} from '../../../atoms/text/Text.type';
import './TitleText.Ions.css';

interface TextProps extends TextAtomsProps {
  size?: Extract<TextSizeTypeAtoms, 'medium' | 'large' | 'extra-large'>;
}

export const PurpleTitleTextIons: React.FC<TextProps> = React.memo((props) => (
  <TextAtoms
    {...props}
    size={props.size || 'large'}
    className={'home-title-text-ions text-colored-purple'}
  />
));
