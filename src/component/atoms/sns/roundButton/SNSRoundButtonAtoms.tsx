import React from 'react';
import {
  FacebookLoginButton,
  GoogleLoginButton,
  InstagramLoginButton,
  XLoginButton,
} from 'react-social-login-buttons';
import { SNSButtonAtomsProps } from '../SNSButton.type';
import './SNSRoundButton.Atoms.css';

export const FacebookRoundButtonAtoms: React.FC<SNSButtonAtomsProps> =
  React.memo((props) => {
    return (
      <FacebookLoginButton
        align="center"
        className={`sns-round-button-atoms ${props.size ?? 'medium'}`}
        text={props.text ?? 'Facebook でログイン'}
        onClick={props.onClick}
      />
    );
  });

export const GoogleRoundButtonAtoms: React.FC<SNSButtonAtomsProps> = React.memo(
  (props) => {
    return (
      <GoogleLoginButton
        align="center"
        className={`sns-round-button-atoms ${props.size ?? 'medium'}`}
        text={props.text ?? 'Google でログイン'}
        onClick={props.onClick}
      />
    );
  },
);

export const XRoundButtonAtoms: React.FC<SNSButtonAtomsProps> = React.memo(
  (props) => {
    return (
      <XLoginButton
        align="center"
        className={`sns-round-button-atoms ${props.size ?? 'medium'}`}
        text={props.text ?? 'X でログイン'}
        onClick={props.onClick}
      />
    );
  },
);

export const InstagramRoundButtonAtoms: React.FC<SNSButtonAtomsProps> =
  React.memo((props) => {
    return (
      <InstagramLoginButton
        align="center"
        className={`sns-round-button-atoms ${props.size ?? 'medium'}`}
        text={props.text ?? 'Instagram でログイン'}
        onClick={props.onClick}
      />
    );
  });
