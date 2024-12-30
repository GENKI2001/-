import { EmblaOptionsType } from 'embla-carousel';
import AutoScroll from 'embla-carousel-auto-scroll';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { useCallback, useEffect } from 'react';
import { useDotButton } from '../hooks/useDotButton';
import { usePrevNextButtons } from '../hooks/usePrevNextButtons';

interface UseCarouselOptions {
  loop?: boolean;
  playOnInit?: boolean;
  delay?: number;
  autoScroll?: boolean;
  onSelectedIndexChange?: (index: number) => void;
}

export const useCarousel = ({
  loop = true,
  playOnInit = false,
  delay = 3000,
  autoScroll = false,
  onSelectedIndexChange,
}: UseCarouselOptions = {}) => {
  const options: EmblaOptionsType = {
    loop,
    skipSnaps: true,
    axis: 'x',
    dragFree: false,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      playOnInit,
      delay,
    }),
    AutoScroll({
      playOnInit: autoScroll,
      startDelay: 30,
      speed: 1.0,
    }),
    WheelGesturesPlugin({}),
  ]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (onSelectedIndexChange) {
      onSelectedIndexChange(selectedIndex);
    }
  }, [selectedIndex, onSelectedIndexChange]);

  const onButtonAutoplayClick = useCallback(
    (callback: () => void) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      const wheelScroll = emblaApi?.plugins()?.wheelGestures;
      if (!autoScroll || !wheelScroll) return;

      const resetOrStop =
        (autoScroll.options as any).stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop;
      resetOrStop();
      callback();
    },
    [emblaApi],
  );

  return {
    emblaRef,
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
    onPrevButtonClick: () => onButtonAutoplayClick(onPrevButtonClick),
    onNextButtonClick: () => onButtonAutoplayClick(onNextButtonClick),
  };
};
