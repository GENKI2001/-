import React from 'react';
import './IconImg.Ions.css';

interface ImgProps {
  img_src: string;
  alt?: string;
  size?: 'extra-small' | 'small' | 'medium' | 'large';
}
const IconImgIons: React.FC<ImgProps> = React.memo(
  ({ img_src, alt, size = 'medium' }) => {
    return <img src={img_src} alt={alt} className={`icon-img-ions ${size}`} />;
  },
);

export default IconImgIons;
