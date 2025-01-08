import React from 'react';
import { TextAtoms } from '../../../atoms/text/Text.Atoms';
import { TextAtomsProps, TextSizeType } from '../../../atoms/text/Text.type';

interface TextProps extends TextAtomsProps {
  size?: TextSizeType;
}

export const BlackTitleTextIons: React.FC<TextProps> = React.memo((props) => (
  <TextAtoms {...props} size={props.size || 'large'} bold color="black" />
));
