export type RadioButtonSizeTypeAtoms = 'small' | 'medium' | 'large';

export type RadioButtonAtomsProps = {
  checked: boolean;
  onClick: () => void;
  isMobile?: boolean;
  size?: RadioButtonSizeTypeAtoms;
  children?: React.ReactNode;
};
