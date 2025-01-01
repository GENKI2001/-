import React from 'react';
import './Img.Atoms.css';
import { ImgAtomsProps } from './Img.type';

const ImgAtoms: React.FC<ImgAtomsProps> = ({ img_src, alt, className }) => {
  return <img src={img_src} alt={alt} className={`img-atoms ${className}`} />;
};

export default ImgAtoms;
