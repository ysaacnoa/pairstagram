import type { ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';
import { badgeStyles } from './badge.styles';

interface BadgeProps {
  children: ReactNode;
  variant?: 'heart' | 'subtle';
}

export const Badge = ({ children, variant = 'heart' }: BadgeProps) => {
  return (
    <span {...stylex.props(badgeStyles.base, badgeStyles[variant])}>
      {children}
    </span>
  );
};