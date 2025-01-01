import PopoverAtoms from '../../atoms/popover/Popover.Atoms';
import { PopoverAtomsProps } from '../../atoms/popover/Popover.type';

const DefaultPopoverIons: React.FC<PopoverAtomsProps> = (props) => {
  return <PopoverAtoms {...props} />;
};

export default DefaultPopoverIons;
