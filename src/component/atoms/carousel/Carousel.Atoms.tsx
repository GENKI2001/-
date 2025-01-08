import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import { BannerCarouselDotButton } from './buttons/Carousel.DotButton.Atoms';
import './style/EmblaCarousel.css';
import { useCarousel } from './useCarousel.hooks';

export interface CarouselAtomsProps {
  isTwoRows?: boolean;
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

const CarouselAtoms: React.FC<CarouselAtomsProps> = ({
  isTwoRows,
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

  const indexArray = Array.from({ length: items.length }, (_, index) => index);

  const containerClass = isBanner ? 'banner' : 'embla';
  const viewportClass = `${containerClass}__viewport`;
  const slideContainerClass = `${containerClass}__container`;
  const slidesColumnClass = `${containerClass}__slides_column`;
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
          {isTwoRows
            ? indexArray.map((num: number, index: number) => {
                if (index % 2 !== 0) return;
                return (
                  <div className={slideClass}>
                    {[0, 1].map((row_index: number) =>
                      index + row_index >= items.length ? null : (
                        <div
                          key={`row1-${index}`}
                          style={{
                            opacity: otherTransparent
                              ? index !== selectedIndex
                                ? 0.2
                                : 1
                              : undefined,
                            transition: 'opacity 0.2s ease-in-out',
                          }}
                        >
                          <div className={slideNumberClass}>
                            {items[index + row_index]}
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                );
              })
            : /* 1行表示 */
              items.map((item, index) => (
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
