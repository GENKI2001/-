import React from 'react';
import { TextAtoms } from '../../../atoms/text/Text.Atoms';
import { TextAtomsProps, TextSizeType } from '../../../atoms/text/Text.type';

interface TextProps extends TextAtomsProps {
  size?: TextSizeType;
}

export const PurpleTitleTextIons: React.FC<TextProps> = React.memo((props) => (
  <TextAtoms {...props} size={props.size || 'large'} bold color="purple" />
));
