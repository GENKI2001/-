import React from 'react';
import { TextAtoms } from '../../../atoms/text/Text.Atoms';
import { TextAtomsProps, TextSizeType } from '../../../atoms/text/Text.type';

interface TextProps extends TextAtomsProps {
  size?: TextSizeType;
}

export const HomeTitleTextIons: React.FC<TextProps> = React.memo((props) => (
  <TextAtoms
    {...props}
    size={props.size || 'extra-large'}
    bold
    color="purple"
  />
));
