export type PopoverPlacement = 'top' | 'bottom' | 'left' | 'right';
export type PopoverTrigger = 'click' | 'hover';
export interface PopoverAtomsProps {
  children: React.ReactNode;
  content: React.ReactNode;
  trigger?: PopoverTrigger;
  placement?: PopoverPlacement;
  className?: string;
}
