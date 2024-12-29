import React from 'react';
import './Text.Atoms.css';
import { TextSizeTypeAtoms } from './type/TextSizeType.Atoms';

type TextProps = {
  text: string;
  className?: string;
  size?: TextSizeTypeAtoms;
  rows?: number;
  onClick?: () => void;
};

export const TextAtoms: React.FC<TextProps> = ({
  text,
  className,
  size = 'medium',
  rows,
  onClick,
}) => (
  // lineheightとrowsが使用されている場合には、
  <span
    onClick={onClick}
    className={`text-atoms-${size} ${className}`}
    style={{
      cursor: onClick ? 'pointer' : undefined,
      height: rows
        ? `calc(var(--font-size) * var(--line-height) * ${rows})`
        : undefined,
      display: rows ? '-webkit-box' : undefined,
      WebkitBoxOrient: rows ? 'vertical' : undefined,
      overflow: rows ? 'hidden' : undefined,
      WebkitLineClamp: rows ? rows : undefined,
    }}
  >
    {text}
  </span>
);
