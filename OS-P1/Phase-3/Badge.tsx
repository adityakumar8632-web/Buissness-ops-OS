import React from 'react';
import { ComponentSize } from '../types/tokens';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'neutral' | 'info' | 'success' | 'warning' | 'error';
  size?: ComponentSize;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'neutral', size = 'sm', className = '' }) => {
  return (
    <span className={`badge badge-${variant} badge-${size} inline-flex items-center px-2 py-0.5 rounded-full font-medium ${className}`}>
      {children}
    </span>
  );
};