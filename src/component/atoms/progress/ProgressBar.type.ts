export type ProgressSizeType = 'small' | 'medium' | 'large';

export interface ProgressAtomsProps {
  progress: number;
  width?: number | string;
  size?: ProgressSizeType;
}
