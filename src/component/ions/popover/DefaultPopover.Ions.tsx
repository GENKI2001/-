import React from 'react';
import PopoverAtoms from '../../atoms/popover/Popover.Atoms';
import { PopoverAtomsProps } from '../../atoms/popover/Popover.type';

const DefaultPopoverIons: React.FC<PopoverAtomsProps> = React.memo((props) => {
  return <PopoverAtoms {...props} />;
});

export default DefaultPopoverIons;
