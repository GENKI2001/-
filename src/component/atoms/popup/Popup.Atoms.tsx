import React from 'react';
import { useVisibilityController } from '../../../hooks/useVisibilityController';
import './Popup.Atoms.css';
import { PopupAtomsProps } from './Popup.type';
import { usePopupClose } from './usePopupClose.hooks';

const PopupAtoms: React.FC<PopupAtomsProps> = React.memo(
  ({ open, onClose, children, size = 'medium' }) => {
    // ドラッグしていなければhandleMouseUpのタイミングでonCloseを実行するhooks
    const { handleMouseDown, handleReset, handleMouseUp } =
      usePopupClose(onClose);

    // アニメーションを制御するhooks
    const { isVisible, isClosing } = useVisibilityController(open, 200);

    if (!isVisible) return null;

    return (
      <div
        role="overlay"
        className={`popup-atoms-overlay ${isClosing ? 'hidden' : ''}`}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={() => {
          handleMouseDown();
        }}
        onTouchEnd={() => {
          handleMouseUp();
        }}
      >
        <div
          role="dialog"
          className={`popup-atoms ${size} ${isClosing ? 'closing' : ''}`}
          onMouseDown={(e) => {
            handleReset();
            e.stopPropagation();
          }}
          onMouseUp={(e) => {
            handleReset();
            e.stopPropagation();
          }}
          onTouchStart={(e) => {
            handleReset();
            e.stopPropagation();
          }}
          onTouchEnd={(e) => {
            handleReset();
            // 実際には防ぎきれない。原因は不明。
            e.stopPropagation();
          }}
        >
          <button className="popup-atoms-close" onClick={onClose}>
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  },
);

export default PopupAtoms;
