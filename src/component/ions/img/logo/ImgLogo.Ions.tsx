import React from 'react';
import './ImgLogo.Ions.css';

interface ImgProps {
  img_src: string;
  alt?: string;
  size?: 'small' | 'medium' | 'large';
}
const ImgLogoIons: React.FC<ImgProps> = ({ img_src, alt, size = 'medium' }) => {
  return <img src={img_src} alt={alt} className={`img-logo-ions-${size}`} />;
};

export default ImgLogoIons;
