import React from 'react';
import { TextAtoms } from '../../../atoms/text/Text.Atoms';
import { TextSizeTypeAtoms } from '../../../atoms/text/Text.type';
import './../Text.Ions.css';
import './TitleText.Ions.css';

type TextProps = {
  text: string;
  onClick?: () => void;
  size?: Extract<TextSizeTypeAtoms, 'large' | 'extra-large'>;
};

export const HomeTitleTextIons: React.FC<TextProps> = ({
  text,
  onClick,
  size = 'extra-large',
}) => (
  <TextAtoms
    onClick={onClick}
    size={size}
    className={'home-title-text-ions text-colored-purple'}
    text={text}
  />
);
