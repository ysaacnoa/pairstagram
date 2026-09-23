import * as stylex from '@stylexjs/stylex';
import { colors, shape, spacing, typography } from '@styles/theme.stylex';

export const feedStyles = stylex.create({
  container: {
    maxWidth: spacing.layoutContainerMax,
    marginHorizontal: 'auto',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: colors.colorBorderDefault,
  },
  tabHeader: {
    display: 'flex',
    justifyContent: 'center',
  },
  activeTab: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.spaceSm,
    backgroundColor: 'transparent',
    borderStyle: 'none',
    borderWidth: 0,
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    borderTopColor: colors.colorBrandPrimary,
    color: colors.colorBrandPrimary,
    paddingVertical: spacing.spaceLg,
    paddingHorizontal: spacing.spaceMd,
    fontSize: typography.fontSizeXs,
    fontWeight: typography.fontWeightBold,
    letterSpacing: '1.2px',
    cursor: 'pointer',
    marginTop: '-1px', // Alinea el borde superior con el borde del contenedor
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: {
      default: spacing.spaceXl,
      '@media (max-width: 640px)': '3px',
    },
  },
  gridItem: {
    position: 'relative',
    aspectRatio: '1 / 1',
    borderRadius: {
      default: shape.radiusMd,
      '@media (max-width: 640px)': shape.radiusNone,
    },
    backgroundColor: colors.colorBgElevated,
    cursor: 'pointer',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: `transform ${shape.transitionSlow}`,
  },
  imageHovered: {
    transform: 'scale(1.04)',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // 🔴 FIX: Usar backgroundImage para variables de gradientes
    backgroundImage: colors.gradientOverlay,
    backdropFilter: 'blur(2px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.space3xl,
    opacity: 0,
    transition: `opacity ${shape.transitionFast}`,
    ':hover': {
      opacity: 1,
    },
  },
  statItem: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.spaceSm,
    fontWeight: typography.fontWeightBold,
    fontSize: typography.fontSizeLg,
    color: colors.colorTextOnPrimary,
  },
});