import React from 'react';
import { TextAtoms } from '../../../atoms/text/Text.Atoms';
import {
  TextAtomsProps,
  TextSizeTypeAtoms,
} from '../../../atoms/text/Text.type';
import './../Text.Ions.css';
import './BodyText.Ions.css';

interface TextProps extends TextAtomsProps {
  size?: Extract<
    TextSizeTypeAtoms,
    'extra-small' | 'small' | 'normal' | 'medium'
  >;
}

export const BodyTextIonsClickable: React.FC<TextProps> = (props) => (
  <TextAtoms
    {...props}
    size={props.size || 'small'}
    className={'body-text-ions clickable text-colored-royalblue'}
  />
);
