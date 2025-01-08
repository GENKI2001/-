import React from 'react';
import { TextAtoms } from '../../../atoms/text/Text.Atoms';
import { TextAtomsProps } from '../../../atoms/text/Text.type';
import './ChatText.Ions.css';

interface ChatTextIonsProps extends TextAtomsProps {
  left?: boolean;
}

export const ChatTextIons: React.FC<ChatTextIonsProps> = React.memo((props) => (
  <TextAtoms
    {...props}
    className={`chat-text-ions ${props.left ? 'left' : 'right'} ${props.size}`}
  />
));
