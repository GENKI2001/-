import React from 'react';
import {
  EmailIcon,
  FacebookIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  XIcon,
} from 'react-share';
import { SNSButtonSizeTypeAtoms } from '../SNSButton.type';
import './SNSCircleButton.Atoms.css';

interface ButtonProps {
  onClick: () => void;
  text?: string;
  size?: SNSButtonSizeTypeAtoms;
}

export const FacebookCircleButtonAtoms: React.FC<ButtonProps> = (props) => {
  return (
    <FacebookIcon
      className={`sns-circle-button-atoms-${props.size ?? 'small'}`}
      round
      role="button"
      onClick={props.onClick}
    />
  );
};

export const XCircleButtonAtoms: React.FC<ButtonProps> = (props) => {
  return (
    <XIcon
      className={`sns-circle-button-atoms-${props.size ?? 'small'}`}
      round
      role="button"
      onClick={props.onClick}
    />
  );
};

export const LineCircleButtonAtoms: React.FC<ButtonProps> = (props) => {
  return (
    <LineIcon
      className={`sns-circle-button-atoms-${props.size ?? 'small'}`}
      round
      role="button"
      onClick={props.onClick}
    />
  );
};

export const HatenaCircleButtonAtoms: React.FC<ButtonProps> = (props) => {
  return (
    <HatenaIcon
      className={`sns-circle-button-atoms-${props.size ?? 'small'}`}
      round
      role="button"
      onClick={props.onClick}
    />
  );
};

export const InstaCircleButtonAtoms: React.FC<ButtonProps> = (props) => {
  return (
    <InstapaperIcon
      className={`sns-circle-button-atoms-${props.size ?? 'small'}`}
      round
      role="button"
      onClick={props.onClick}
    />
  );
};

export const LinkedinCircleButtonAtoms: React.FC<ButtonProps> = (props) => {
  return (
    <LinkedinIcon
      className={`sns-circle-button-atoms-${props.size ?? 'small'}`}
      round
      role="button"
      onClick={props.onClick}
    />
  );
};

export const EmailCircleButtonAtoms: React.FC<ButtonProps> = (props) => {
  return (
    <EmailIcon
      className={`sns-circle-button-atoms-${props.size ?? 'small'}`}
      round
      role="button"
      onClick={props.onClick}
    />
  );
};
