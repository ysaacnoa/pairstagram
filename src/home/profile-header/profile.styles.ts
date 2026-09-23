import * as stylex from '@stylexjs/stylex';
import { colors, shape, spacing, typography } from '@styles/theme.stylex';

export const profileStyles = stylex.create({
  wrapper: {
    maxWidth: spacing.layoutContainerMax,
    marginHorizontal: 'auto',
    paddingHorizontal: spacing.spaceLg,
    paddingTop: spacing.spaceMd,
    paddingBottom: spacing.space2xl
  },
  profileMain: {
    display: 'flex',
    flexDirection: {
      default: 'row',
      '@media (max-width: 640px)': 'column',
    },
    alignItems: 'center',
    gap: spacing.space3xl,
    marginBottom: spacing.spaceLg,
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexShrink: 0,
  },
  avatarRing: {
    width: '156px',
    height: '156px',
    borderRadius: shape.radiusFull,
    padding: '3px',
    background: colors.gradientStoryRing,
    boxShadow: shape.shadowGlow,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    borderRadius: shape.radiusFull,
    objectFit: 'cover',
    borderWidth: '4px',
    borderStyle: 'solid',
    borderColor: colors.colorBgBase,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spaceLg,
    flexGrow: 1,
  },
  usernameRow: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.spaceXl,
    flexWrap: 'wrap',
  },
  username: {
    fontSize: typography.fontSize2xl,
    fontWeight: typography.fontWeightBold,
    color: colors.colorTextPrimary,
    letterSpacing: '-0.3px',
  },
  statsRow: {
    display: 'flex',
    gap: spacing.space3xl,
    fontSize: typography.fontSizeMd,
    color: colors.colorTextSecondary,
  },
  statItem: {
    display: 'inline-flex',
    gap: spacing.spaceXs,
    alignItems: 'baseline',
  },
  statNumber: {
    fontWeight: typography.fontWeightBold,
    color: colors.colorTextPrimary,
  },
  bioContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spaceXs,
  },
  fullName: {
    fontWeight: typography.fontWeightSemiBold,
    fontSize: typography.fontSizeMd,
    color: colors.colorTextPrimary,
  },
  bioText: {
    fontSize: typography.fontSizeMd,
    lineHeight: typography.lineHeightRelaxed,
    color: colors.colorTextSecondary,
    whiteSpace: 'pre-line',
  },
  // Contenedor de historias con scroll limpio
  storiesRow: {
    display: 'flex',
    gap: spacing.space2xl,
    overflowX: 'auto',
    paddingVertical: spacing.spacenone,
    scrollbarWidth: 'none', // Oculta barra en Firefox
    '::-webkit-scrollbar': {
      display: 'none', // Oculta barra en Chrome/Safari
    },
  },
  storyItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: spacing.spaceSm,
    backgroundColor: 'transparent',
    borderStyle: 'none',
    borderWidth: 0,
    cursor: 'pointer',
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
  },
  storyRing: {
    width: '76px',
    height: '76px',
    borderRadius: shape.radiusFull,
    padding: '3px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: colors.colorBorderStrong,
    backgroundColor: colors.colorBgElevated,
    transition: `all ${shape.transitionNormal}`,
    ':hover': {
      transform: 'scale(1.05)',
      borderColor: colors.colorBrandPrimary,
      boxShadow: shape.shadowGlow,
    },
  },
  storyImg: {
    width: '100%',
    height: '100%',
    borderRadius: shape.radiusFull,
    objectFit: 'cover',
  },
  storyTitle: {
    fontSize: typography.fontSizeXs,
    color: colors.colorTextSecondary,
    fontWeight: typography.fontWeightMedium,
  },
});