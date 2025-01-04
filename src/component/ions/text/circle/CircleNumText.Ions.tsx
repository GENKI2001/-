import React from 'react';
import { TextAtoms } from '../../../atoms/text/Text.Atoms';
import { TextSizeTypeAtoms } from '../../../atoms/text/Text.type';
import './CircleNumText.Ions.css';

type TextProps = {
  num: number;
  size?: Extract<TextSizeTypeAtoms, 'small' | 'normal' | 'medium'>;
};

export const CircleNumTextIons: React.FC<TextProps> = React.memo(
  ({ num, size = 'normal' }) => (
    <TextAtoms
      size={size}
      className={`circle-num-text-ions ${size}`}
      text={String(num)}
    />
  ),
);
