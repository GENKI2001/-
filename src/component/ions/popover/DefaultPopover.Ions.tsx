import PopoverAtoms from '../../atoms/popover/Popover.Atoms';
import { PopoverPlacement } from '../../atoms/popover/type/PopoverPlacement';
import { PopoverTrigger } from '../../atoms/popover/type/PopoverTrigger';

export interface PopoverProps {
  children: React.ReactNode;
  content: React.ReactNode;
  trigger?: PopoverTrigger;
  placement?: PopoverPlacement;
  className?: string;
}

const DefaultPopoverIons: React.FC<PopoverProps> = ({
  children,
  content,
  trigger,
  placement,
}) => {
  return (
    <PopoverAtoms content={content} trigger={trigger} placement={placement}>
      {children}
    </PopoverAtoms>
  );
};

export default DefaultPopoverIons;
