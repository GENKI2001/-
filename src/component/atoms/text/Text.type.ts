export type TextSizeTypeAtoms =
  | 'extra-small'
  | 'small'
  | 'normal'
  | 'medium'
  | 'large'
  | 'extra-large';

export type TextAtomsProps = {
  text: string;
  className?: string;
  size?: TextSizeTypeAtoms;
  rows?: number;
  onClick?: () => void;
};
