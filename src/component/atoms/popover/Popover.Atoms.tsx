import { usePopover } from '../../../hooks/usePopover';
import { useVisibleAnimation } from '../../../hooks/usePopupAnimation';
import './Popover.Atoms.css';
import { PopoverPlacement } from './type/PopoverPlacement';
import { PopoverTrigger } from './type/PopoverTrigger';

export interface PopoverProps {
  children: React.ReactNode;
  content: React.ReactNode;
  trigger?: PopoverTrigger;
  placement?: PopoverPlacement;
  className?: string;
}

const PopoverAtoms: React.FC<PopoverProps> = ({
  children,
  content,
  trigger = 'hover',
  placement = 'bottom',
}) => {
  // ポップオーバーの表示・非表示を制御するhooks
  const {
    open,
    triggerRef,
    popoverRef,
    handlers: { handleMouseEnter, handleMouseLeave, handleClick },
  } = usePopover({ trigger });

  // アニメーションを制御するhooks
  const { isVisible, isClosing } = useVisibleAnimation(open, 200);

  return (
    <div className="popover-wrapper">
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-expanded={isVisible}
        aria-haspopup="true"
      >
        {children}
      </div>
      {isVisible && (
        <div
          ref={popoverRef}
          className={`popover-atoms popover-${placement} ${isClosing ? 'closing' : ''}`}
          role="tooltip"
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default PopoverAtoms;
