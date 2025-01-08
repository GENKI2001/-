import React from 'react';
import './ImgLogo.Ions.css';

interface ImgProps {
  img_src: string;
  alt?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
}
const ImgLogoIons: React.FC<ImgProps> = React.memo(
  ({ img_src, alt, size = 'medium', onClick }) => {
    return (
      <img
        src={img_src}
        alt={alt}
        onClick={onClick}
        className={`img-logo-ions ${size} ${onClick ? 'clickable' : ''}`}
      />
    );
  },
);

export default ImgLogoIons;
