import type { InputHTMLAttributes } from 'react';
import * as stylex from '@stylexjs/stylex';
import { Search } from 'lucide-react';
import { inputStyles } from './input.styles';
import { colors } from '@styles/theme.stylex';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  showSearchIcon?: boolean;
}

export const Input = ({
  label,
  error,
  showSearchIcon = true,
  ...props
}: InputProps) => {
  return (
    <div {...stylex.props(inputStyles.wrapper)}>
      {label && <label {...stylex.props(inputStyles.label)}>{label}</label>}
      <div {...stylex.props(inputStyles.inputContainer)}>
        {showSearchIcon && (
          <Search size={16} color={colors.colorTextTertiary} />
        )}
        <input {...props} {...stylex.props(inputStyles.input)} />
      </div>
      {error && <span {...stylex.props(inputStyles.errorText)}>{error}</span>}
    </div>
  );
};