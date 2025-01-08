import React from 'react';
import { TextAtoms } from '../../../atoms/text/Text.Atoms';
import { TextSizeType } from '../../../atoms/text/Text.type';
import './RoundText.Ions.css';

type TextProps = {
  size?: Extract<TextSizeType, 'small' | 'normal' | 'medium'>;
};

export const RequireTextIons: React.FC<TextProps> = React.memo(
  ({ size = 'normal' }) => (
    <TextAtoms
      size={size}
      color="white"
      bold
      className={`round-text-ions ${size} round-require-text-ions`}
      text={'必須'}
    />
  ),
);
