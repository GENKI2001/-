import React from 'react';
import { useVisibilityController } from '../../../hooks/useVisibilityController';
import './Popover.Atoms.css';
import { PopoverAtomsProps } from './Popover.type';
import { usePopover } from './usePopover.hooks';

const PopoverAtoms: React.FC<PopoverAtomsProps> = React.memo(
  ({ children, content, trigger = 'click', placement = 'bottom' }) => {
    // ポップオーバーの表示・非表示を制御するhooks
    const {
      open,
      triggerRef,
      popoverRef,
      handlers: { handleMouseEnter, handleMouseLeave, handleClick },
    } = usePopover({ trigger });

    // アニメーションを制御するhooks
    const { isVisible, isClosing } = useVisibilityController(open, 200);

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
  },
);

export default PopoverAtoms;
