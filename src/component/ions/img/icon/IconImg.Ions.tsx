import React from 'react';
import './IconImg.Ions.css';

interface ImgProps {
  img_src: string;
  alt?: string;
  size?: 'small' | 'medium' | 'large';
}
const IconImgIons: React.FC<ImgProps> = ({ img_src, alt, size = 'medium' }) => {
  return (
    <img src={img_src} alt={alt} className={`icon-img icon-img-ions-${size}`} />
  );
};

export default IconImgIons;
