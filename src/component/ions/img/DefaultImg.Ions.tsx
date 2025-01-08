import React from 'react';
import ImgAtoms from '../../atoms/img/Img.Atoms';
import { ImgAtomsProps } from '../../atoms/img/Img.type';

const DefaultImgIons: React.FC<ImgAtomsProps> = React.memo((props) => {
  return <ImgAtoms {...props} />;
});

export default DefaultImgIons;
