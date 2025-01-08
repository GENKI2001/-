import React from 'react';
import './Text.Atoms.css';
import { TextAtomsProps } from './Text.type';

export const TextAtoms: React.FC<TextAtomsProps> = React.memo(
  ({ text, className, size = 'medium', rows, onClick, color, bold }) => (
    <span
      onClick={onClick}
      className={`text-atoms ${size} ${color} ${bold ? 'bold' : ''} ${className}`}
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
  ),
);
