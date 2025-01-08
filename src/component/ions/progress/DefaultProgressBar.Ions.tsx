import React from 'react';
import ProgressBarAtoms from '../../atoms/progress/ProgressBar.Atoms';
import { ProgressAtomsProps } from '../../atoms/progress/ProgressBar.type';

const DefaultProgressBarIons: React.FC<ProgressAtomsProps> = React.memo(
  (props) => {
    return <ProgressBarAtoms {...props} />;
  },
);

export default DefaultProgressBarIons;
