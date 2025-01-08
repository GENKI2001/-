export type RadioButtonSizeType = 'small' | 'medium' | 'large';

export type RadioButtonAtomsProps = {
  checked: boolean;
  onChange: () => void;
  isMobile?: boolean;
  size?: RadioButtonSizeType;
  children?: React.ReactNode;
};
