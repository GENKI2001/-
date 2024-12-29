import { useCallback, useState } from 'react';

interface useDragDetectionProps {
  handleMouseDown: () => void;
  handleReset: () => void;
  handleMouseUp: () => void;
}

// 特別な制御を行う: handleMouseDownとhandleMouseUpが両方とも実行されたらonDragEndを実行する
export const usePopupClose = (onClose: () => void): useDragDetectionProps => {
  const [isDown, setIsDown] = useState(false);

  const handleMouseDown = useCallback(() => {
    setIsDown(true);
  }, []);

  const handleMouseUp = useCallback(() => {
    if (isDown) {
      onClose();
    }
    setIsDown(false);
  }, [isDown, onClose]);

  const handleReset = useCallback(() => {
    setIsDown(false);
  }, []);

  return {
    handleMouseDown,
    handleReset,
    handleMouseUp,
  };
};
