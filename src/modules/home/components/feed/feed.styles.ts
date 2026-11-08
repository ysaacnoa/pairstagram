import * as stylex from '@stylexjs/stylex';
import { colors, shape, spacing, typography } from '@styles/theme.stylex';

const pulseGlow = stylex.keyframes({
  '0%': { transform: 'scale(1)', opacity: 0.8 },
  '50%': { transform: 'scale(1.08)', opacity: 1 },
  '100%': { transform: 'scale(1)', opacity: 0.8 },
});

export const feedStyles = stylex.create({
  container: {
    maxWidth: spacing.layoutContainerMax,
    marginHorizontal: 'auto',
    paddingHorizontal: spacing.spaceLg,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  // Encabezado de la Pestaña
  tabHeader: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: spacing.space3xl,
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderBottomColor: colors.colorBorderDefault,
    width: '100%',
  },
  activeTab: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: spacing.spaceSm,
    paddingBottom: spacing.spaceLg,
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderBottomColor: colors.colorTextPrimary,
    backgroundColor: 'transparent',
    borderTopStyle: 'none',
    borderLeftStyle: 'none',
    borderRightStyle: 'none',
    color: colors.colorTextPrimary,
    fontFamily: typography.fontFamilyCursive,
    fontSize: '18px',
    fontWeight: typography.fontWeightSemiBold,
    letterSpacing: '0.5px',
    cursor: 'pointer',
  },

  // Tarjeta de En Construcción (Work in Progress)
  wipCard: {
    width: '100%',
    maxWidth: '620px',
    padding: {
      default: spacing.space3xl,
      '@media (max-width: 640px)': spacing.spaceXl,
    },
    borderRadius: shape.radiusLg,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(12px)',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'rgba(230, 104, 60, 0.18)',
    boxShadow: '0 12px 32px rgba(230, 104, 60, 0.06)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: spacing.spaceLg,
  },

  // Contenedor de Íconos Iluminados
  iconBadge: {
    width: '72px',
    height: '72px',
    borderRadius: shape.radiusFull,
    backgroundColor: 'rgba(230, 104, 60, 0.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#e6683c',
    animationName: pulseGlow,
    animationDuration: '3000ms',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'ease-in-out',
    marginBottom: spacing.spaceXs,
  },

  // Textos Románticos en Cursiva
  wipTitle: {
    fontFamily: typography.fontFamilyCursive,
    fontSize: {
      default: '32px',
      '@media (max-width: 640px)': '26px',
    },
    fontWeight: typography.fontWeightBold,
    color: colors.colorTextPrimary,
    margin: spacing.spaceNone,
    letterSpacing: '-0.3px',
  },
  wipSubtitle: {
    fontFamily: typography.fontFamilyCursive,
    fontSize: {
      default: '20px',
      '@media (max-width: 640px)': '17px',
    },
    color: colors.colorTextSecondary,
    lineHeight: typography.lineHeightRelaxed,
    margin: spacing.spaceNone,
    maxWidth: '480px',
  },

  // Divisor de Detalles Románticos
  detailsRow: {
    display: 'flex',
    alignItems: 'center',
    gap: spacing.spaceLg,
    marginTop: spacing.spaceMd,
    paddingTop: spacing.spaceLg,
    borderTopWidth: '1px',
    borderTopStyle: 'dashed',
    borderTopColor: 'rgba(230, 104, 60, 0.2)',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  detailItem: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: spacing.spaceXs,
    fontFamily: typography.fontFamilyCursive,
    fontSize: '16px',
    color: colors.colorTextSecondary,
  },
});