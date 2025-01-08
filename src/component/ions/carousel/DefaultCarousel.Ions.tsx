import React from 'react';
import CarouselAtoms, {
  CarouselAtomsProps,
} from '../../atoms/carousel/Carousel.Atoms';

const DefaultCarouselIons: React.FC<CarouselAtomsProps> = (props) => {
  return <CarouselAtoms {...props} />;
};

export default DefaultCarouselIons;
