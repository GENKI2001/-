export type SNSButtonSizeTypeAtoms = 'small' | 'medium' | 'large';

export type SNSButtonAtomsProps = {
  onClick: () => void;
  text?: string;
  size?: SNSButtonSizeTypeAtoms;
};
