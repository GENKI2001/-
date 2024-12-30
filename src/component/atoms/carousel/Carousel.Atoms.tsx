import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import { useCarousel } from '../../../hooks/useCarousel';
import { BannerCarouselDotButton } from './buttons/Carousel.DotButton.Atoms';
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

const CarouselAtoms: React.FC<CarouselProps> = ({
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
  const {
    emblaRef,
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
    onPrevButtonClick,
    onNextButtonClick,
  } = useCarousel({
    loop,
    playOnInit,
    delay,
    autoScroll,
    onSelectedIndexChange: (index: number) => {
      if (setSelectedID && IDs) {
        setSelectedID(IDs[index]);
      }
    },
  });

  const ModifiedButton = (
    button: ReactElement<{ onClick: () => void }> | undefined,
    onClick: () => void,
  ) => {
    if (React.isValidElement(button)) {
      return React.cloneElement(button, { onClick });
    }
    return null;
  };

  const containerClass = isBanner ? 'banner' : 'embla';
  const viewportClass = `${containerClass}__viewport`;
  const slideContainerClass = `${containerClass}__container`;
  const slideClass = `${containerClass}__slide`;
  const slideNumberClass = `${containerClass}__slide__number`;

  return (
    <div
      className={containerClass}
      style={
        {
          position: 'relative',
          '--slide-size': isBanner ? '100%' : `${slide_min_width ?? 0}px`,
        } as React.CSSProperties
      }
    >
      <div className={viewportClass} ref={emblaRef}>
        <div className={slideContainerClass}>
          {items.map((item, index) => (
            <div
              className={slideClass}
              key={index}
              style={{
                opacity: otherTransparent
                  ? index !== selectedIndex
                    ? 0.2
                    : 1
                  : undefined,
                transition: 'opacity 0.2s ease-in-out',
              }}
            >
              <div className={slideNumberClass}>{item}</div>
            </div>
          ))}
        </div>
      </div>

      {displayButton && (
        <div className="banner__controls">
          <div className="banner__dots">
            {scrollSnaps.map((_, index: number) => (
              <BannerCarouselDotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className="banner__dot"
                style={{
                  backgroundColor:
                    index === selectedIndex ? '#383E86' : '#C2C2C2',
                  ...(index === selectedIndex ? selectedDotButtonStyle : {}),
                }}
              />
            ))}
          </div>
        </div>
      )}

      {ModifiedButton(prevButton, onPrevButtonClick)}
      {ModifiedButton(nextButton, onNextButtonClick)}
    </div>
  );
};

export default CarouselAtoms;
