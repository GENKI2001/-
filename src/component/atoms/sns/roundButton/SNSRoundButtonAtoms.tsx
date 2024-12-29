import React from 'react';
import {
  FacebookLoginButton,
  GoogleLoginButton,
  InstagramLoginButton,
  XLoginButton,
} from 'react-social-login-buttons';
import { SNSButtonSizeTypeAtoms } from '../type/SNSButtonSizeType.Atoms';
import './SNSRoundButton.Atoms.css';

interface ButtonProps {
  onClick: () => void;
  text?: string;
  size?: SNSButtonSizeTypeAtoms;
}

export const FacebookRoundButtonAtoms: React.FC<ButtonProps> = (props) => {
  return (
    <FacebookLoginButton
      align="center"
      className={`sns-round-button-atoms-${props.size ?? 'medium'}`}
      text={props.text ?? 'Facebook でログイン'}
      onClick={props.onClick}
    />
  );
};

export const GoogleRoundButton: React.FC<ButtonProps> = (props) => {
  return (
    <GoogleLoginButton
      align="center"
      className={`sns-round-button-atoms-${props.size ?? 'medium'}`}
      text={props.text ?? 'Google でログイン'}
      onClick={props.onClick}
    />
  );
};

export const XRoundButton: React.FC<ButtonProps> = (props) => {
  return (
    <XLoginButton
      align="center"
      className={`sns-round-button-atoms-${props.size ?? 'medium'}`}
      text={props.text ?? 'X でログイン'}
      onClick={props.onClick}
    />
  );
};

export const InstagramRoundButton: React.FC<ButtonProps> = (props) => {
  return (
    <InstagramLoginButton
      align="center"
      className={`sns-round-button-atoms-${props.size ?? 'medium'}`}
      text={props.text ?? 'Instagram でログイン'}
      onClick={props.onClick}
    />
  );
};
