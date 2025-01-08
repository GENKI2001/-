export type CheckboxSizeType = 'small' | 'medium' | 'large';

export type CheckboxAtomsProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  size?: CheckboxSizeType;
};
