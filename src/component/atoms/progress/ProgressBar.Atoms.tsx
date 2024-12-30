import React from 'react';
import './ProgressBar.Atoms.css';

interface ProgressProps {
  progress: number;
}

const ProgressBarAtoms: React.FC<ProgressProps> = ({ progress }) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        role="progressbar"
        aria-valuenow={clampedProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="progress-fill"
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBarAtoms;
