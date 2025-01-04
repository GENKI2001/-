import React from 'react';
import ProgressBarAtoms from '../../atoms/progress/ProgressBar.Atoms';

interface ProgressProps {
  progress: number;
}

const DefaultProgressBarIons: React.FC<ProgressProps> = React.memo(
  ({ progress }) => {
    return <ProgressBarAtoms progress={progress} />;
  },
);

export default DefaultProgressBarIons;
