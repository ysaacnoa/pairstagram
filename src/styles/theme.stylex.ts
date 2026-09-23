import * as stylex from '@stylexjs/stylex';

export const colors = stylex.defineVars({
  // Fondos Claros y Suaves (Base Marfil/Crema)
  colorBgBase: '#FAF7F7',
  colorBgElevated: '#FFFFFF',
  colorBgSubtle: '#F4ECEE',
  colorBgInteractive: '#EFE3E6',
  colorBgHover: 'rgba(224, 82, 99, 0.08)',
  colorBgActive: 'rgba(224, 82, 99, 0.14)',

  // Marca y Corazón
  colorBrandPrimary: '#E05263',
  colorBrandPrimaryHover: '#C83E50',
  colorBrandHeart: '#FF4D6D',
  colorBrandGlow: 'rgba(224, 82, 99, 0.15)',

  // Bordes sutiles
  colorBorderDefault: '#EEDCE0',
  colorBorderStrong: '#DFC2C8',
  colorBorderFocus: '#E05263',

  // 🎨 JERARQUÍA DE TEXTO OPTIMIZADA PARA MODO CLARO
  colorTextPrimary: '#2B1E22',    // Títulos y texto principal (Marrón café/vino muy oscuro)
  colorTextSecondary: '#6B575D',  // Subtítulos y descripciones (Rosa ceniza oscuro)
  colorTextTertiary: '#9E888E',   // Placeholders e íconos inactivos (Rosa topo medio)
  colorTextOnPrimary: '#FFFFFF',  // Texto sobre botones rosados/rojos
  colorTextLink: '#D9384E',       // Enlaces y acentos dinámicos

  // Degradados Románticos
  gradientStoryRing: 'linear-gradient(135deg, #FF9A9E 0%, #FECFEF 50%, #E05263 100%)',
  gradientOverlay: 'linear-gradient(180deg, rgba(43,30,34,0) 0%, rgba(43,30,34,0.6) 100%)',
  gradientHeroButton: 'linear-gradient(135deg, #E05263 0%, #D84358 100%)',
});

export const shape = stylex.defineVars({
  radiusNone: '0px',
  radiusSm: '6px',
  radiusMd: '10px',
  radiusLg: '16px',
  radiusXl: '24px',
  radiusFull: '9999px',

  shadowElevationSm: '0 2px 8px rgba(224, 82, 99, 0.06)',
  shadowElevationMd: '0 8px 24px rgba(224, 82, 99, 0.10)',
  shadowGlow: '0 4px 15px rgba(224, 82, 99, 0.18)',

  zIndexBase: '1',
  zIndexSticky: '100',
  zIndexModal: '1000',
  zIndexTooltip: '1100',

  transitionFast: '150ms cubic-bezier(0.16, 1, 0.3, 1)',
  transitionNormal: '250ms cubic-bezier(0.16, 1, 0.3, 1)',
  transitionSlow: '400ms cubic-bezier(0.16, 1, 0.3, 1)',
});

export const spacing = stylex.defineVars({
  spacenone: '0px',
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