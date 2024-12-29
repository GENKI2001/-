import { useState } from 'react';

interface UseOpenReturn {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleChangeOpen: () => void;
}

// 開閉の状態を管理するカスタムフック
const useOpen = (init?: boolean): UseOpenReturn => {
  const [open, setOpen] = useState<boolean>(init ?? false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeOpen = () => {
    setOpen(!open);
  };

  return {
    open,
    handleOpen,
    handleClose,
    handleChangeOpen,
  };
};

export default useOpen;
