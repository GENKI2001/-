import React from 'react';
import {
  EmailCircleButtonAtoms,
  FacebookCircleButtonAtoms,
  HatenaCircleButtonAtoms,
  InstaCircleButtonAtoms,
  LineCircleButtonAtoms,
  LinkedinCircleButtonAtoms,
  XCircleButtonAtoms,
} from '../../../atoms/sns/circleButton/SNSCircleButton.Atoms';
import { SNSButtonSizeTypeAtoms } from '../../../atoms/sns/SNSButton.type';

interface SNSCircleButtonProps {
  type: 'Facebook' | 'X' | 'Line' | 'Hatena' | 'Insta' | 'Linkedin' | 'Email';
  onClick: () => void;
  size?: SNSButtonSizeTypeAtoms;
}

export const SNSCircleButton: React.FC<SNSCircleButtonProps> = React.memo(
  ({ type, onClick, size = 'small' }) => {
    switch (type) {
      case 'Facebook':
        return <FacebookCircleButtonAtoms onClick={onClick} size={size} />;
      case 'X':
        return <XCircleButtonAtoms onClick={onClick} size={size} />;
      case 'Line':
        return <LineCircleButtonAtoms onClick={onClick} size={size} />;
      case 'Hatena':
        return <HatenaCircleButtonAtoms onClick={onClick} size={size} />;
      case 'Insta':
        return <InstaCircleButtonAtoms onClick={onClick} size={size} />;
      case 'Linkedin':
        return <LinkedinCircleButtonAtoms onClick={onClick} size={size} />;
      case 'Email':
        return <EmailCircleButtonAtoms onClick={onClick} size={size} />;
      default:
        return null;
    }
  },
);
