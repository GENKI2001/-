import React from 'react';
import { TextAtoms } from '../../../atoms/text/Text.Atoms';
import {
  TextAtomsProps,
  TextSizeTypeAtoms,
} from '../../../atoms/text/Text.type';
import './SubTitleText.Ions.css';

interface TextProps extends TextAtomsProps {
  size?: Extract<TextSizeTypeAtoms, 'normal' | 'medium' | 'large'>;
}

export const HomeSubTitleTextIons: React.FC<TextProps> = (props) => (
  <TextAtoms
    {...props}
    size={props.size || 'medium'}
    className={'home-subtitle-text-ions'}
  />
);
