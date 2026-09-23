import * as stylex from '@stylexjs/stylex';
import { colors, shape, spacing, typography } from '@styles/theme.stylex';

export const buttonStyles = stylex.create({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.spaceSm,
    fontFamily: typography.fontFamilyBase,
    fontWeight: typography.fontWeightSemiBold,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'transparent',
    cursor: 'pointer',
    outline: 'none',
    transition: `all ${shape.transitionFast}`,
    WebkitTapHighlightColor: 'transparent',
    ':disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },

  // Variantes de Estilo
  primary: {
    backgroundImage: colors.gradientHeroButton,
    color: colors.colorTextOnPrimary,
    boxShadow: shape.shadowGlow,
    ':hover': {
      transform: 'translateY(-1px)',
      boxShadow: '0 0 25px rgba(224, 82, 99, 0.4)',
    },
    ':active': {
      transform: 'translateY(0)',
    },
  },
  secondary: {
    backgroundColor: colors.colorBgInteractive,
    borderColor: colors.colorBorderDefault,
    color: colors.colorTextPrimary,
    ':hover': {
      backgroundColor: colors.colorBgHover,
      borderColor: colors.colorBorderStrong,
    },
  },
  ghost: {
    backgroundColor: 'transparent',
    color: colors.colorTextSecondary,
    ':hover': {
      backgroundColor: colors.colorBgHover,
      color: colors.colorBrandHeart,
    },
  },

  // Tamaños
  sm: {
    paddingHorizontal: spacing.spaceMd,
    paddingVertical: spacing.spaceXs,
    fontSize: typography.fontSizeSm,
    borderRadius: shape.radiusFull,
  },
  md: {
    paddingHorizontal: spacing.spaceXl,
    paddingVertical: spacing.spaceSm,
    fontSize: typography.fontSizeMd,
    borderRadius: shape.radiusFull,
  },
  lg: {
    paddingHorizontal: spacing.space2xl,
    paddingVertical: spacing.spaceMd,
    fontSize: typography.fontSizeLg,
    borderRadius: shape.radiusFull,
  },

  // Ancho completo
  fullWidth: {
    width: '100%',
  },
});