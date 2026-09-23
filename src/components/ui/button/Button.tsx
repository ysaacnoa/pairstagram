import type { ButtonHTMLAttributes, ReactNode } from 'react';
import * as stylex from '@stylexjs/stylex';
import { buttonStyles } from './button.styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      {...stylex.props(
        buttonStyles.base,
        buttonStyles[variant],
        buttonStyles[size],
        fullWidth ? buttonStyles.fullWidth : undefined,
      )}
    >
      {children}
    </button>
  );
};