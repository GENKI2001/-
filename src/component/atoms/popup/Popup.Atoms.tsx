import React, { ReactNode } from 'react';
import { useVisibleAnimation } from '../../../hooks/usePopupAnimation';
import { usePopupClose } from '../../../hooks/usePopupClose';
import './Popup.Atoms.css';

interface PopupProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const PopupAtoms: React.FC<PopupProps> = ({ open, onClose, children }) => {
  // ドラッグしていなければhandleMouseUpのタイミングでonCloseを実行するhooks
  const { handleMouseDown, handleReset, handleMouseUp } =
    usePopupClose(onClose);

  // ポップアップの表示・非表示を制御するhooks
  const { isVisible, isClosing } = useVisibleAnimation(open, 200);

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
        className={`popup-atoms ${isClosing ? 'closing' : ''}`}
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
};

export default PopupAtoms;
