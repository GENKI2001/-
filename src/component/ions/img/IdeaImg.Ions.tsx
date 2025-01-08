import React from 'react';
import ImgAtoms from '../../atoms/img/Img.Atoms';
import { ImgAtomsProps } from '../../atoms/img/Img.type';
import './Img.Ions.css';

const IdeaImgIons: React.FC<ImgAtomsProps> = React.memo((props) => {
  return <ImgAtoms {...props} className={`idea-img-ions ${props.className}`} />;
});

export default IdeaImgIons;
