import React from 'react';
import { TextAtoms } from '../../../atoms/text/Text.Atoms';
import { TextAtomsProps, TextSizeType } from '../../../atoms/text/Text.type';
import './HomeSubTitleText.Ions.css';

interface TextProps extends TextAtomsProps {
  size?: TextSizeType;
}

export const HomeSubTitleTextIons: React.FC<TextProps> = React.memo((props) => (
  <TextAtoms
    {...props}
    size={props.size || 'large'}
    color="purple"
    bold
    className={'home-subtitle-text-ions'}
  />
));
