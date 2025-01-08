import React from 'react';
import {
  FacebookRoundButtonAtoms,
  GoogleRoundButtonAtoms,
  InstagramRoundButtonAtoms,
  XRoundButtonAtoms,
} from '../../../atoms/sns/roundButton/SNSRoundButtonAtoms';
import { SNSButtonSizeTypeAtoms } from '../../../atoms/sns/SNSButton.type';

interface SNSButtonProps {
  type: 'Facebook' | 'Google' | 'X' | 'Instagram';
  onClick: () => void;
  text?: string;
  size?: SNSButtonSizeTypeAtoms;
}

export const SNSRoundButton: React.FC<SNSButtonProps> = React.memo(
  ({ type, onClick, text, size = 'medium' }) => {
    switch (type) {
      case 'Facebook':
        return (
          <FacebookRoundButtonAtoms
            onClick={onClick}
            text={type + ' で' + text}
            size={size}
          />
        );
      case 'Google':
        return (
          <GoogleRoundButtonAtoms
            onClick={onClick}
            text={type + ' で' + text}
            size={size}
          />
        );
      case 'X':
        return (
          <XRoundButtonAtoms
            onClick={onClick}
            text={type + ' で' + text}
            size={size}
          />
        );
      case 'Instagram':
        return (
          <InstagramRoundButtonAtoms
            onClick={onClick}
            text={type + ' で' + text}
            size={size}
          />
        );
      default:
        return null;
    }
  },
);
