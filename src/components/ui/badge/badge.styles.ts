import * as stylex from '@stylexjs/stylex';
import { colors, shape, spacing, typography } from '@styles/theme.stylex';

export const badgeStyles = stylex.create({
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: spacing.space2xs,
    paddingHorizontal: spacing.spaceSm,
    paddingVertical: '2px',
    borderRadius: shape.radiusFull,
    fontSize: typography.fontSizeXs,
    fontWeight: typography.fontWeightBold,
    lineHeight: typography.lineHeightTight,
  },
  heart: {
    backgroundColor: 'rgba(255, 77, 109, 0.15)',
    color: colors.colorBrandHeart,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgba(255, 77, 109, 0.3)',
  },
  subtle: {
    backgroundColor: colors.colorBgInteractive,
    color: colors.colorTextSecondary,
  },
});