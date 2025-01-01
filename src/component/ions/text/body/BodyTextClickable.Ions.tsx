import React from 'react';
import { TextAtoms } from '../../../atoms/text/Text.Atoms';
import { TextSizeTypeAtoms } from '../../../atoms/text/Text.type';
import './../Text.Ions.css';
import './BodyText.Ions.css';

type TextProps = {
  text: string;
  onClick?: () => void;
  size?: Extract<TextSizeTypeAtoms, 'extra-small' | 'small' | 'normal'>;
  rows?: number;
};

export const BodyTextIonsClickable: React.FC<TextProps> = ({
  text,
  onClick,
  size = 'small',
  rows,
}) => (
  <TextAtoms
    onClick={onClick}
    size={size}
    className={'body-text-ions clickable text-colored-royalblue'}
    text={text}
    rows={rows}
  />
);
