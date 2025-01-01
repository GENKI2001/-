import React from 'react';
import { TextAtoms } from '../../../atoms/text/Text.Atoms';
import { TextSizeTypeAtoms } from '../../../atoms/text/Text.type';
import './TitleText.Ions.css';

type TextProps = {
  text: string;
  onClick?: () => void;
  size?: Extract<TextSizeTypeAtoms, 'medium' | 'large' | 'extra-large'>;
};

export const PurpleTitleTextIons: React.FC<TextProps> = ({
  text,
  onClick,
  size,
}) => (
  <TextAtoms
    onClick={onClick}
    size={size}
    className={'home-title-text-ions text-colored-black'}
    text={text}
  />
);
