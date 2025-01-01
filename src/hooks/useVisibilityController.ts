import { useEffect, useState } from 'react';

export const useVisibilityController = (
  open: boolean,
  animationDuration: number,
) => {
  const [isVisible, setIsVisible] = useState(open);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
      setIsClosing(false);
    } else {
      setIsClosing(true);
      const timeoutId = setTimeout(
        () => setIsVisible(false),
        animationDuration,
      );
      return () => clearTimeout(timeoutId);
    }
  }, [open, animationDuration]);

  return { isVisible, isClosing };
};
