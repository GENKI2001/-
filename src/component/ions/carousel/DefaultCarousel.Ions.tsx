import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import CarouselAtoms from '../../atoms/carousel/Carousel.Atoms';
import './style/EmblaCarousel.css';

interface CarouselProps {
  isBanner?: boolean;
  delay?: number;
  displayButton?: boolean;
  items?: any[];
  slide_min_width?: number;
  borderRadius?: number;
  aspectRatio?: string;
  playOnInit?: boolean;
  autoScroll?: boolean;
  IDs?: (string | null)[];
  isSelectedBorder?: boolean;
  setSelectedID?: Dispatch<SetStateAction<string | null>>;
  loop?: boolean;
  otherTransparent?: boolean;
  prevButton?: ReactElement;
  nextButton?: ReactElement;
  selectedDotButtonStyle?: React.CSSProperties;
  disableDrag?: boolean;
  disableScroll?: boolean;
}

const DefaultCarouselIons: React.FC<CarouselProps> = ({
  isBanner,
  displayButton = true,
  playOnInit,
  items = [],
  slide_min_width,
  delay,
  IDs,
  setSelectedID,
  loop,
  otherTransparent,
  autoScroll,
  prevButton,
  nextButton,
  selectedDotButtonStyle,
}) => {
  return (
    <CarouselAtoms
      isBanner={isBanner}
      displayButton={displayButton}
      playOnInit={playOnInit}
      items={items}
      slide_min_width={slide_min_width}
      delay={delay}
      IDs={IDs}
      setSelectedID={setSelectedID}
      loop={loop}
      otherTransparent={otherTransparent}
      autoScroll={autoScroll}
      prevButton={prevButton}
      nextButton={nextButton}
      selectedDotButtonStyle={selectedDotButtonStyle}
    />
  );
};

export default DefaultCarouselIons;
