import * as stylex from '@stylexjs/stylex';
import { colors, shape, spacing, typography } from '@styles/theme.stylex';

export const navbarStyles = stylex.create({
  root: {
    position: 'sticky',
    top: 0,
    zIndex: shape.zIndexSticky,
    backgroundColor: 'rgba(253, 251, 251, 0.85)',
    backdropFilter: 'blur(12px)',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: colors.colorBorderDefault,
    paddingVertical: spacing.spaceSm,
  },
  container: {
    maxWidth: spacing.layoutContainerMax,
    marginHorizontal: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.spaceLg,
  },
  logo: {
    fontFamily: typography.fontFamilyBase,
    fontSize: typography.fontSize2xl,
    fontWeight: typography.fontWeightBold,
    letterSpacing: '-0.5px',
    cursor: 'pointer',
    background: colors.gradientStoryRing,
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
  },
  searchWrapper: {
    display: {
      default: 'block',
      '@media (max-width: 640px)': 'none',
    },
    width: '260px',
  },
  navActions: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.spaceSm,
  },
  actionButtonWrapper: {
    position: 'relative',
    display: 'inline-flex',
  },
  badgePosition: {
    position: 'absolute',
    top: '-2px',
    right: '-2px',
    pointerEvents: 'none',
  },
});