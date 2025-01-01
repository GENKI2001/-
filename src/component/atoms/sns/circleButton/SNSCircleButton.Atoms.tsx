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
import { SNSButtonAtomsProps } from '../SNSButton.type';
import './SNSCircleButton.Atoms.css';

export const FacebookCircleButtonAtoms: React.FC<SNSButtonAtomsProps> = (
  props,
) => {
  return (
    <FacebookIcon
      className={`sns-circle-button-atoms-${props.size ?? 'small'}`}
      round
      role="button"
      onClick={props.onClick}
    />
  );
};

export const XCircleButtonAtoms: React.FC<SNSButtonAtomsProps> = (props) => {
  return (
    <XIcon
      className={`sns-circle-button-atoms-${props.size ?? 'small'}`}
      round
      role="button"
      onClick={props.onClick}
    />
  );
};

export const LineCircleButtonAtoms: React.FC<SNSButtonAtomsProps> = (props) => {
  return (
    <LineIcon
      className={`sns-circle-button-atoms-${props.size ?? 'small'}`}
      round
      role="button"
      onClick={props.onClick}
    />
  );
};

export const HatenaCircleButtonAtoms: React.FC<SNSButtonAtomsProps> = (
  props,
) => {
  return (
    <HatenaIcon
      className={`sns-circle-button-atoms-${props.size ?? 'small'}`}
      round
      role="button"
      onClick={props.onClick}
    />
  );
};

export const InstaCircleButtonAtoms: React.FC<SNSButtonAtomsProps> = (
  props,
) => {
  return (
    <InstapaperIcon
      className={`sns-circle-button-atoms-${props.size ?? 'small'}`}
      round
      role="button"
      onClick={props.onClick}
    />
  );
};

export const LinkedinCircleButtonAtoms: React.FC<SNSButtonAtomsProps> = (
  props,
) => {
  return (
    <LinkedinIcon
      className={`sns-circle-button-atoms-${props.size ?? 'small'}`}
      round
      role="button"
      onClick={props.onClick}
    />
  );
};

export const EmailCircleButtonAtoms: React.FC<SNSButtonAtomsProps> = (
  props,
) => {
  return (
    <EmailIcon
      className={`sns-circle-button-atoms-${props.size ?? 'small'}`}
      round
      role="button"
      onClick={props.onClick}
    />
  );
};
