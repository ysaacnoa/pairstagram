import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
  // 🌸 FONDOS BASE Y SURFACES ROMÁNTICAS
  colorBgBase: '#FAF4F5', // Crema suave con tinte rosado sutil
  colorBgElevated: '#FFFFFF', // Blanco puro para tarjetas principales
  colorBgSubtle: '#F6EAEF', // Superficies secundarias suavemente tintadas
  colorBgInteractive: '#EFE0E5', // Fichas y botones interactivos suaves
  colorBgHover: 'rgba(224, 82, 99, 0.08)',
  colorBgActive: 'rgba(224, 82, 99, 0.16)',

  // ✨ GLASSMORPHISM & BLUR TINTADOS (Efecto Cristal Romántico)
  colorGlassSurface: 'rgba(255, 252, 253, 0.72)', // Cristal traslúcido para Header/Navbar
  colorGlassSurfaceElevated: 'rgba(255, 255, 255, 0.85)', // Cristal para Modales
  colorGlassBorder: 'rgba(238, 220, 224, 0.65)', // Borde sutil brillante
  colorGlassOverlay: 'rgba(43, 30, 34, 0.45)', // Overlay oscuro para historias/modales con tinte vino

  // 🌹 MARCA Y ACENTOS
  colorBrandPrimary: '#E05263',
  colorBrandPrimaryHover: '#C83E50',
  colorBrandHeart: '#FF4D6D',
  colorBrandGlow: 'rgba(224, 82, 99, 0.20)',

  // 🎀 BORDES SUTILES
  colorBorderDefault: '#EEDCE0',
  colorBorderStrong: '#DFC2C8',
  colorBorderFocus: '#E05263',

  // 🎨 JERARQUÍA DE TEXTO EN MODO CLARO
  colorTextPrimary: '#2B1E22', // Marrón café/vino muy oscuro para alto contraste
  colorTextSecondary: '#6B575D', // Rosa ceniza oscuro para lecturas secundarias
  colorTextTertiary: '#9E888E', // Placeholders e íconos inactivos
  colorTextOnPrimary: '#FFFFFF', // Texto sobre superficies con gradiente
  colorTextLink: '#D9384E', // Enlaces y acentos dinámicos

  // 💗 DEGRADADOS ROMÁNTICOS
  gradientStoryRing: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 50%, #E05263 100%)',
  gradientOverlay: 'linear-gradient(180deg, rgba(43,30,34,0) 0%, rgba(43,30,34,0.65) 100%)',
  gradientHeroButton: 'linear-gradient(135deg, #E05263 0%, #D84358 100%)',
  gradientGlassCard: 'linear-gradient(135deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 240, 243, 0.6) 100%)',

  // 🎬 STORY VIEWER DEDICADO
  colorStoryViewerOverlay: 'rgba(30, 18, 22, 0.88)',
  colorStoryViewerSurface: 'linear-gradient(180deg, rgba(43, 30, 34, 0.90), rgba(25, 15, 18, 0.95))',
  colorStoryViewerText: '#FFFFFF',
  colorStoryViewerTextMuted: 'rgba(255, 255, 255, 0.75)',
  colorStoryViewerAccent: '#FF9A9E',
  colorStoryViewerProgressTrack: 'rgba(255, 255, 255, 0.30)',
  colorStoryViewerProgressFill: '#FFFFFF',
  colorStoryViewerCaptionBg: 'rgba(43, 30, 34, 0.75)',
  colorStoryViewerShadow: '0 24px 70px rgba(43, 30, 34, 0.50)',
});

export const shape = stylex.defineVars({
  radiusNone: '0px',
  radiusSm: '6px',
  radiusMd: '10px',
  radiusLg: '16px',
  radiusXl: '24px',
  radiusFull: '9999px',

  // Sombras con resplandor suave
  shadowElevationSm: '0 2px 8px rgba(224, 82, 99, 0.06)',
  shadowElevationMd: '0 8px 24px rgba(224, 82, 99, 0.12)',
  shadowElevated: '0 16px 40px rgba(43, 30, 34, 0.15)',
  shadowGlow: '0 4px 18px rgba(224, 82, 99, 0.22)',

  // Blurs de Glassmorphism
  blurSm: 'blur(8px)',
  blurMd: 'blur(16px)',
  blurLg: 'blur(24px)',

  zIndexBase: '1',
  zIndexSticky: '100',
  zIndexModal: '1000',
  zIndexTooltip: '1100',

  transitionFast: '150ms cubic-bezier(0.16, 1, 0.3, 1)',
  transitionNormal: '250ms cubic-bezier(0.16, 1, 0.3, 1)',
  transitionSlow: '400ms cubic-bezier(0.16, 1, 0.3, 1)',
});

export const spacing = stylex.defineVars({
  spaceNone: '0px',
  space2xs: '2px',
  spaceXs: '4px',
  spaceSm: '8px',
  spaceMd: '12px',
  spaceLg: '16px',
  spaceXl: '24px',
  space2xl: '32px',
  space3xl: '48px',
  space4xl: '64px',

  layoutContainerMax: '935px',
  layoutHeaderHeight: '64px',
});

export const typography = stylex.defineVars({
  fontFamilyBase: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  fontFamilyMono: 'ui-monospace, Menlo, Monaco, monospace',
  fontFamilyCursive: '"Dancing Script", "Caveat", "Brush Script MT", cursive',

  fontSizeXs: '11px',
  fontSizeSm: '12px',
  fontSizeMd: '14px',
  fontSizeLg: '16px',
  fontSizeXl: '20px',
  fontSize2xl: '26px',

  lineHeightTight: '1.2',
  lineHeightNormal: '1.45',
  lineHeightRelaxed: '1.6',

  fontWeightRegular: '400',
  fontWeightMedium: '500',
  fontWeightSemiBold: '600',
  fontWeightBold: '700',
});