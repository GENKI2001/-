import React from 'react';
import { TextAtoms } from '../../../atoms/text/Text.Atoms';
import {
  TextAtomsProps,
  TextSizeTypeAtoms,
} from '../../../atoms/text/Text.type';
import './../Text.Ions.css';
import './TitleText.Ions.css';

interface TextProps extends TextAtomsProps {
  size?: Extract<TextSizeTypeAtoms, 'medium' | 'large' | 'extra-large'>;
}

export const HomeTitleTextIons: React.FC<TextProps> = (props) => (
  <TextAtoms
    {...props}
    size={props.size || 'extra-large'}
    className={'home-title-text-ions text-colored-purple'}
  />
);
