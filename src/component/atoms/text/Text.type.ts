export type TextSizeType =
  | 'tiny'
  | 'extra-small'
  | 'small'
  | 'normal'
  | 'medium'
  | 'large'
  | 'bit-large'
  | 'very-large'
  | 'extra-large';

export type TextColorType = 'black' | 'grey' | 'purple' | 'white' | 'royalblue';

export type TextAtomsProps = {
  text: string;
  size?: TextSizeType;
  rows?: number;
  onClick?: () => void;
  color?: TextColorType;
  className?: string;
  bold?: boolean;
};
