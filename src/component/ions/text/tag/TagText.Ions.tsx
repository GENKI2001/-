import React from 'react';
import { TextAtoms } from '../../../atoms/text/Text.Atoms';
import { TextSizeTypeAtoms } from '../../../atoms/text/Text.type';
import './../Text.Ions.css';
import './TagText.Ions.css';

type TextProps = {
  text: string;
  onClick?: () => void;
  size?: TextSizeTypeAtoms;
};

export const TagText: React.FC<TextProps> = ({
  text,
  onClick,
  size = 'small',
}) => (
  <TextAtoms
    onClick={onClick}
    size={size}
    className={`tag-text-ions ${onClick ? 'clickable' : ''}`}
    text={'# ' + text}
  />
);
