import React from 'react';
import './ProgressBar.Atoms.css';
import { ProgressAtomsProps } from './ProgressBar.type';

const ProgressBarAtoms: React.FC<ProgressAtomsProps> = React.memo(
  ({ progress, size = 'medium', width }) => {
    const clampedProgress = Math.min(Math.max(progress, 0), 100);

    return (
      <div className="progress-container" style={{ width: width }}>
        <div
          className={`progress-bar ${size}`}
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
  },
);

export default ProgressBarAtoms;
