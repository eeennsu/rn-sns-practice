import { createTokens } from 'tamagui';

export const tokens = createTokens({
  color: {
    // Brand Colors (Deep Purple/Blue Theme)
    brandLight: '#818cf8', // Indigo 400
    brand: '#4f46e5', // Indigo 600
    brandDark: '#3730a3', // Indigo 800

    // Accents
    accent: '#06b6d4', // Cyan 500
    accentLight: '#67e8f9', // Cyan 300
    accentDark: '#0e7490', // Cyan 700

    // Semantic
    success: '#10b981', // Emerald 500
    warning: '#f59e0b', // Amber 500
    error: '#ef4444', // Red 500
    info: '#3b82f6', // Blue 500

    // Neutrals
    white: '#ffffff',
    black: '#000000',
    gray1: '#f8fafc',
    gray2: '#f1f5f9',
    gray3: '#e2e8f0',
    gray4: '#cbd5e1',
    gray5: '#94a3b8',
    gray6: '#64748b',
    gray7: '#475569',
    gray8: '#334155',
    gray9: '#1e293b',
    gray10: '#0f172a',
    gray11: '#020617',
    gray12: '#000000',

    // Standard Palette
    red: '#ef4444',
    redLight: '#f87171',
    redDark: '#b91c1c',

    orange: '#f97316',
    orangeLight: '#fb923c',
    orangeDark: '#c2410c',

    yellow: '#eab308',
    yellowLight: '#facc15',
    yellowDark: '#a16207',

    green: '#22c55e',
    greenLight: '#4ade80',
    greenDark: '#15803d',

    blue: '#3b82f6',
    blueLight: '#60a5fa',
    blueDark: '#1d4ed8',

    purple: '#a855f7',
    purpleLight: '#c084fc',
    purpleDark: '#7e22ce',

    pink: '#ec4899',
    pinkLight: '#f472b6',
    pinkDark: '#be185d',

    teal: '#14b8a6',
    tealLight: '#2dd4bf',
    tealDark: '#0f766e',
  },
});

const lightTheme = {
  background: tokens.color.white,
  backgroundHover: tokens.color.gray2,
  backgroundPress: tokens.color.gray3,
  backgroundFocus: tokens.color.gray2,
  backgroundTransparent: 'rgba(255,255,255,0)',

  color: tokens.color.gray11,
  colorHover: tokens.color.gray12,
  colorPress: tokens.color.gray12,
  colorFocus: tokens.color.gray11,
  colorTransparent: 'rgba(0,0,0,0)',

  borderColor: tokens.color.gray4,
  borderColorHover: tokens.color.gray6,
  borderColorPress: tokens.color.gray5,
  borderColorFocus: tokens.color.brand,

  shadowColor: tokens.color.gray9,
  shadowColorHover: tokens.color.gray10,
  shadowColorPress: tokens.color.gray10,
  shadowColorFocus: tokens.color.gray9,

  // Brand specific
  brand: tokens.color.brand,
  brandHover: tokens.color.brandDark,
  brandPress: tokens.color.brandLight,
};

const darkTheme = {
  background: tokens.color.gray11,
  backgroundHover: tokens.color.gray10,
  backgroundPress: tokens.color.gray9,
  backgroundFocus: tokens.color.gray10,
  backgroundTransparent: 'rgba(0,0,0,0)',

  color: tokens.color.gray2,
  colorHover: tokens.color.white,
  colorPress: tokens.color.white,
  colorFocus: tokens.color.gray1,
  colorTransparent: 'rgba(255,255,255,0)',

  borderColor: tokens.color.gray8,
  borderColorHover: tokens.color.gray6,
  borderColorPress: tokens.color.gray7,
  borderColorFocus: tokens.color.brandLight,

  shadowColor: tokens.color.black,
  shadowColorHover: tokens.color.black,
  shadowColorPress: tokens.color.black,
  shadowColorFocus: tokens.color.black,

  // Brand specific
  brand: tokens.color.brand,
  brandHover: tokens.color.brandLight,
  brandPress: tokens.color.brandDark,
};

// Export raw theme objects, let createTamagui handle parsing
export const themes = {
  light: lightTheme,
  dark: darkTheme,
};
