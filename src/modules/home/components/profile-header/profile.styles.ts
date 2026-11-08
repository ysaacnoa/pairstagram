import * as stylex from '@stylexjs/stylex';
import { colors, shape, spacing, typography } from '@styles/theme.stylex';

const loadingAnimation = stylex.keyframes({
  '0%': {
    strokeDasharray: '300, 0',
    strokeDashoffset: '0',
    transform: 'rotate(0deg)',
  },
  '50%': {
    strokeDasharray: '25, 15',
    strokeDashoffset: '-20',
  },
  '100%': {
    strokeDasharray: '5, 10',
    strokeDashoffset: '-60',
    transform: 'rotate(360deg)',
  },
});

export const profileStyles = stylex.create({
  wrapper: {
    maxWidth: spacing.layoutContainerMax,
    marginHorizontal: 'auto',
    paddingHorizontal: spacing.spaceLg,
    paddingTop: spacing.spaceLg,
    paddingBottom: spacing.space2xl,
  },

  // Fila y Contenedor de Historias
  storiesContainer: {
    position: 'relative',
    width: '100%',
    marginTop: spacing.spaceLg,
  },
  storiesRow: {
    display: 'flex',
    gap: spacing.space2xl,
    overflowX: 'auto',
    paddingVertical: spacing.spaceLg,
    paddingHorizontal: spacing.spaceXs,
    scrollbarWidth: 'none',
    scrollBehavior: 'smooth',
    scrollSnapType: 'x mandatory',
    WebkitOverflowScrolling: 'touch',
    '::-webkit-scrollbar': {
      display: 'none',
    },
  },

  // Botones de Navegación Lateral
  scrollButton: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 10,
    width: '36px',
    height: '36px',
    borderRadius: shape.radiusFull,
    backgroundColor: colors.colorBgElevated,
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: colors.colorBorderDefault,
    outline: 'none',
    WebkitTapHighlightColor: 'transparent',
    boxShadow: shape.shadowElevated,
    display: {
      default: 'flex',
      '@media (max-width: 640px)': 'none',
    },
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.colorTextPrimary,
    cursor: 'pointer',
    padding: spacing.spaceNone,
    transition: `transform ${shape.transitionFast}, opacity ${shape.transitionFast}`,
    ':hover': {
      transform: 'translateY(-50%) scale(1.1)',
    },
    ':active': {
      transform: 'translateY(-50%) scale(0.95)',
    },
  },
  scrollButtonLeft: {
    left: spacing.spaceXs,
  },
  scrollButtonRight: {
    right: spacing.spaceXs,
  },

  // Ítem Individual de Historia
  storyItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '3px',
    backgroundColor: 'transparent',
    borderStyle: 'none',
    borderWidth: 0,
    cursor: 'pointer',
    padding: 0,
    flexShrink: 0,
    scrollSnapAlign: 'start',
  },
  storyWrapper: {
    position: 'relative',
    width: '92px',
    height: '92px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  storySvg: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transformOrigin: 'center center',
  },
  storyCircleBase: {
    strokeDasharray: '300, 0',
    strokeDashoffset: '0',
    transition: 'stroke-dasharray 0.2s ease',
  },
  storySvgAnimated: {
    animationName: loadingAnimation,
    animationDuration: '1500ms',
    animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    animationIterationCount: 'infinite',
  },
  storyImg: {
    width: '72px',
    height: '72px',
    borderRadius: shape.radiusFull,
    objectFit: 'cover',
    position: 'relative',
    zIndex: 1,
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.colorBgBase,
  },
  storyTitle: {
    fontFamily: typography.fontFamilyCursive,
    fontSize: '15px',
    color: colors.colorTextPrimary,
    fontWeight: typography.fontWeightSemiBold,
    letterSpacing: '0.2px',
    marginTop: '1px',
  },
});