import React from 'react';
import { TextAtoms } from '../../../atoms/text/Text.Atoms';
import { TextSizeTypeAtoms } from '../../../atoms/text/Text.type';
import './SubTitleText.Ions.css';

type TextProps = {
  text: string;
  onClick?: () => void;
  size?: Extract<TextSizeTypeAtoms, 'normal' | 'medium' | 'large'>;
};

export const HomeSubTitleTextIons: React.FC<TextProps> = ({
  text,
  onClick,
  size = 'large',
}) => (
  <TextAtoms
    onClick={onClick}
    size={size}
    className={'home-subtitle-text-ions'}
    text={text}
  />
);
