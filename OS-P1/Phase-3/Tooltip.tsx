import React, { useState, useId } from 'react';

export interface TooltipProps {
  content: string;
  children: React.ReactElement;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip: React.FC<TooltipProps> = ({ content, children, position = 'top' }) => {
  const [visible, setVisible] = useState(false);
  const tooltipId = useId();

  return (
    <div
      className="tooltip-wrapper relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {React.cloneElement(children, {
        'aria-describedby': visible ? tooltipId : undefined,
      })}
      {visible && (
        <div
          id={tooltipId}
          role="tooltip"
          className={`tooltip-bubble tooltip-${position} absolute z-50 pointer-events-none px-2 py-1 text-xs rounded shadow-md`}
        >
          {content}
        </div>
      )}
    </div>
  );
};