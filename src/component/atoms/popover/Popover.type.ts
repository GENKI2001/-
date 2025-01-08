export type PopoverPlacement =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'left-top'
  | 'left-bottom'
  | 'right'
  | 'right-top'
  | 'right-bottom';

export type PopoverTrigger = 'click' | 'hover';

export interface PopoverAtomsProps {
  children: React.ReactNode;
  content: React.ReactNode;
  trigger?: PopoverTrigger;
  placement?: PopoverPlacement;
  className?: string;
}
