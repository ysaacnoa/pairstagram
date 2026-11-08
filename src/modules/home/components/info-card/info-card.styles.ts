import * as stylex from '@stylexjs/stylex';
import { colors, shape, spacing, typography } from '@styles/theme.stylex';

const fadeIn = stylex.keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

export const profileInfoStyles = stylex.create({
  profileMain: {
    display: 'flex',
    flexDirection: {
      default: 'row',
      '@media (max-width: 640px)': 'column',
    },
    alignItems: 'center',
    gap: {
      default: spacing.space3xl,
      '@media (max-width: 640px)': spacing.spaceLg,
    },
    marginBottom: spacing.spaceXl,
    width: '100%',
    boxSizing: 'border-box',
  },

  // Contenedor de la Foto (Ajustado para que en mobile no ocupe tanto espacio vertical)
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexShrink: 0,
    cursor: 'pointer',
  },
  avatarRing: {
    width: {
      default: '200px',
      '@media (max-width: 640px)': '150px', // Reducido un poco para equilibrar el alto en mobile
    },
    height: {
      default: '200px',
      '@media (max-width: 640px)': '150px',
    },
    borderRadius: shape.radiusFull,
    padding: '4px',
    backgroundImage: colors.gradientStoryRing,
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
    borderWidth: '5px',
    borderStyle: 'solid',
    borderColor: colors.colorBgBase,
    viewTransitionName: 'profile-avatar-transition',
  },
  avatarImgInactive: {
    viewTransitionName: 'none',
  },

  // Contenedor de información (Centrado en mobile para mantener la simetría)
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing.spaceMd,
    flexGrow: 1,
    width: '100%',
    alignItems: {
      default: 'flex-start',
      '@media (max-width: 640px)': 'center', // Centra todo el bloque en mobile
    },
    textAlign: {
      default: 'left',
      '@media (max-width: 640px)': 'center', // Centra los textos en mobile
    },
    boxSizing: 'border-box',
  },

  usernameRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: {
      default: 'flex-start',
      '@media (max-width: 640px)': 'center',
    },
    gap: spacing.spaceMd,
    flexWrap: 'wrap',
    width: '100%',
  },
  username: {
    fontFamily: typography.fontFamilyCursive,
    fontSize: {
      default: '32px',
      '@media (max-width: 640px)': '28px',
    },
    fontWeight: typography.fontWeightBold,
    color: colors.colorTextPrimary,
    letterSpacing: '-0.3px',
    margin: 0,
  },

  // Badge del Contador Ajustado a Mobile (Evita el desbordamiento hacia la derecha)
  loveCounterBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.spaceXs,
    paddingVertical: spacing.spaceXs,
    paddingHorizontal: spacing.spaceMd,
    borderRadius: shape.radiusFull,
    backgroundColor: 'rgba(230, 104, 60, 0.08)',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: 'rgba(230, 104, 60, 0.2)',
    maxWidth: '100%',
    boxSizing: 'border-box',
    flexWrap: 'wrap', // Permite que los elementos se acomoden si la pantalla es muy estrecha
  },
  loveCounterNumber: {
    fontFamily: typography.fontFamilyCursive,
    fontSize: {
      default: typography.fontSizeLg,
      '@media (max-width: 640px)': '16px',
    },
    fontWeight: typography.fontWeightBold,
    color: '#e6683c',
    whiteSpace: 'nowrap',
  },
  loveCounterLabel: {
    fontSize: {
      default: typography.fontSizeSm,
      '@media (max-width: 640px)': '13px',
    },
    color: colors.colorTextSecondary,
    whiteSpace: 'nowrap',
  },

  // Métricas Adaptables (Distribución equitativa sin saltos raras de línea)
  statsRow: {
    display: 'flex',
    justifyContent: {
      default: 'flex-start',
      '@media (max-width: 640px)': 'space-around', // Distribuye las 3 columnas simétricamente
    },
    alignItems: 'center',
    gap: {
      default: spacing.space3xl,
      '@media (max-width: 640px)': spacing.spaceMd,
    },
    width: '100%',
    paddingVertical: spacing.spaceXs,
    fontSize: typography.fontSizeMd,
    color: colors.colorTextSecondary,
    boxSizing: 'border-box',
  },
  statItem: {
    display: 'inline-flex',
    flexDirection: {
      default: 'row',
      '@media (max-width: 640px)': 'column', // Muestra el número arriba y la etiqueta abajo en mobile
    },
    gap: '2px',
    alignItems: 'center',
    fontFamily: typography.fontFamilyCursive,
    fontSize: {
      default: '16px',
      '@media (max-width: 640px)': '15px',
    },
  },
  statNumber: {
    fontWeight: typography.fontWeightBold,
    color: colors.colorTextPrimary,
    fontFamily: typography.fontFamilyCursive,
  },

  // Biografía
  bioContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: {
      default: 'flex-start',
      '@media (max-width: 640px)': 'center',
    },
    gap: spacing.spaceXs,
    width: '100%',
  },
  fullName: {
    fontFamily: typography.fontFamilyCursive,
    fontSize: '22px',
    fontWeight: typography.fontWeightSemiBold,
    color: colors.colorTextPrimary,
  },
  bioText: {
    fontFamily: typography.fontFamilyCursive,
    fontSize: '17px',
    lineHeight: typography.lineHeightRelaxed,
    color: colors.colorTextSecondary,
    whiteSpace: 'pre-line',
    margin: 0,
  },

  // Modal View Transition
  modalBackdrop: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 1000,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    backdropFilter: 'blur(10px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.spaceLg,
    animationName: fadeIn,
    animationDuration: '200ms',
    animationTimingFunction: 'ease-out',
    cursor: 'zoom-out',
  },
  expandedAvatarImg: {
    maxWidth: '90vw',
    maxHeight: '85vh',
    width: 'auto',
    height: 'auto',
    objectFit: 'contain',
    borderRadius: '8px',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
    viewTransitionName: 'profile-avatar-transition',
  },
});