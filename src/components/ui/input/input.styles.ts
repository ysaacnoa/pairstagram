import * as stylex from '@stylexjs/stylex';
import { colors, shape, spacing, typography } from '@styles/theme.stylex';

export const inputStyles = stylex.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spaceXs,
    width: '100%',
  },
  label: {
    fontSize: typography.fontSizeXs,
    fontWeight: typography.fontWeightSemiBold,
    color: colors.colorTextSecondary,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.spaceSm,
    backgroundColor: colors.colorBgSubtle,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.colorBorderDefault,
    borderRadius: shape.radiusFull,
    paddingHorizontal: spacing.spaceMd,
    paddingVertical: spacing.spaceXs,
    transition: `all ${shape.transitionFast}`,
    ':focus-within': {
      borderColor: colors.colorBorderFocus,
      boxShadow: shape.shadowGlow,
      backgroundColor: colors.colorBgElevated,
    },
  },
  input: {
    width: '100%',
    backgroundColor: 'transparent',
    borderStyle: 'none',
    borderWidth: 0,
    outline: 'none',
    boxShadow: 'none',
    color: colors.colorTextPrimary, // Fix: Texto oscuro visible
    fontFamily: typography.fontFamilyBase,
    fontSize: typography.fontSizeSm,
    paddingVertical: spacing.spaceXs,
    paddingHorizontal: 0,
    '::placeholder': {
      color: colors.colorTextTertiary,
    },
  },
  errorText: {
    fontSize: typography.fontSizeXs,
    color: colors.colorBrandHeart,
  },
});