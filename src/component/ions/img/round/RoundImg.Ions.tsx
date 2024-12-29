import React from 'react';
import './RoundImg.Ions.css';

interface ImgProps {
  img_src: string;
  alt?: string;
}
const RoundImgIons: React.FC<ImgProps> = ({ img_src, alt }) => {
  return <img src={img_src} alt={alt} className={`round-img-ions`} />;
};

export default RoundImgIons;
