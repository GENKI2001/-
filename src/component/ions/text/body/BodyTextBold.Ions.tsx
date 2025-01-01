import React from 'react';
import { TextAtoms } from '../../../atoms/text/Text.Atoms';
import {
  TextAtomsProps,
  TextSizeTypeAtoms,
} from '../../../atoms/text/Text.type';
import './BodyText.Ions.css';

interface TextProps extends TextAtomsProps {
  size?: Extract<
    TextSizeTypeAtoms,
    'extra-small' | 'small' | 'normal' | 'medium'
  >;
}

export const BodyTextBoldIons: React.FC<TextProps> = (props) => (
  <TextAtoms
    {...props}
    size={props.size || 'small'}
    className={'body-text-bold-ions text-colored-black'}
  />
);
