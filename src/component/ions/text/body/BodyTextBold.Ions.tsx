import React from 'react';
import { TextAtoms } from '../../../atoms/text/Text.Atoms';
import { TextSizeTypeAtoms } from '../../../atoms/text/type/TextSizeType.Atoms';
import './BodyText.Ions.css';

type TextProps = {
  text: string;
  onClick?: () => void;
  size?: Extract<TextSizeTypeAtoms, 'extra-small' | 'small' | 'normal'>;
  rows?: number;
};

export const BodyTextBoldIons: React.FC<TextProps> = ({
  text,
  onClick,
  size = 'small',
  rows,
}) => (
  <TextAtoms
    onClick={onClick}
    size={size}
    className={'body-text-bold-ions text-colored-black'}
    text={text}
    rows={rows}
  />
);
