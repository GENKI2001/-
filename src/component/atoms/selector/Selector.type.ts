export type SelectorOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type SelectorAtomsProps = {
  options: SelectorOption[];
  value: string;
  onChange: (option: SelectorOption) => void;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
};
