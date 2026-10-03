import React, { useState, useRef, useEffect, useId } from 'react';

export interface DropdownItem {
  id: string;
  label: string;
  onSelect: () => void;
  disabled?: boolean;
}

export interface DropdownProps {
  trigger: (props: { 'aria-expanded': boolean; 'aria-haspopup': boolean; onClick: () => void }) => React.ReactNode;
  items: DropdownItem[];
}

export const Dropdown: React.FC<DropdownProps> = ({ trigger, items }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="dropdown-root relative inline-block">
      {trigger({
        'aria-expanded': open,
        'aria-haspopup': true,
        onClick: () => setOpen((prev) => !prev),
      })}
      {open && (
        <ul id={menuId} role="menu" className="dropdown-menu absolute z-50 mt-1 shadow-lg">
          {items.map((item) => (
            <li key={item.id} role="none">
              <button
                role="menuitem"
                disabled={item.disabled}
                onClick={() => {
                  item.onSelect();
                  setOpen(false);
                }}
                className="dropdown-item w-full text-left"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};