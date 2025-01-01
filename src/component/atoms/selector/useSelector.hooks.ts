import { RefObject, useEffect, useRef, useState } from 'react';
import useOpen from '../../../hooks/useOpen';
import { SelectorOption } from './Selector.type';

type UseSelectorProps = {
  options: SelectorOption[];
  value: string;
  onOptionValueChange: (value: SelectorOption) => void;
  disabled?: boolean;
};

interface UseSelectorReturn {
  // 開閉状態
  open: boolean;
  handleSelectClick: () => void;
  // ハイライトされているインデックス
  highlightedIndex: number | null;
  setHighlightedIndex: (index: number | null) => void;
  // 選択されているオプション
  selectedOption: SelectorOption | null;
  handleOptionClick: (optionValue: SelectorOption) => void;
  wrapperRef: RefObject<HTMLDivElement>;
}

export const useSelector = ({
  options,
  value,
  onOptionValueChange: onOptionValueChange,
  disabled = false,
}: UseSelectorProps): UseSelectorReturn => {
  // 開閉状態を管理
  const { open, handleClose, handleChangeOpen } = useOpen(false);
  // ハイライトされているインデックスを管理
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  // 選択されているオプションを取得
  const selectedOption = options.find((opt) => opt.value === value) ?? null;

  // オプションをクリックしたときの処理
  const handleOptionClick = (optionValue: SelectorOption) => {
    onOptionValueChange(optionValue);
    handleClose();
  };

  // セレクトボックスをクリックしたときの処理
  const handleSelectClick = () => {
    if (!disabled) handleChangeOpen();
  };

  // セレクトボックス外をクリックしたときに閉じる処理
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    // クリック(タッチ)イベントを追加
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      // クリック(タッチ)イベントを削除
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [handleClose]);

  return {
    open,
    handleSelectClick,
    highlightedIndex,
    setHighlightedIndex,
    selectedOption,
    handleOptionClick,
    wrapperRef,
  };
};
