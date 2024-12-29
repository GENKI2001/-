import { useEffect, useRef, useState } from 'react';
import { PopoverTrigger } from '../component/atoms/popover/type/PopoverTrigger';

interface UsePopoverProps {
  trigger: PopoverTrigger;
}

export const usePopover = ({ trigger }: UsePopoverProps) => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const triggerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (trigger === 'click' && open) {
        const target = event.target as Node;
        if (
          !triggerRef.current?.contains(target) &&
          !popoverRef.current?.contains(target)
        ) {
          setOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, trigger]);

  const handleMouseEnter = () => {
    if (trigger === 'hover') {
      clearTimeout(timeoutRef.current);
      setOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') {
      timeoutRef.current = setTimeout(() => {
        setOpen(false);
      }, 0);
    }
  };

  const handleClick = () => {
    if (trigger === 'click') {
      setOpen(!open);
    }
  };

  return {
    open,
    triggerRef,
    popoverRef,
    handlers: {
      handleMouseEnter,
      handleMouseLeave,
      handleClick,
    },
  };
};
