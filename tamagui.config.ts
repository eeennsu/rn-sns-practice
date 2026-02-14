import { defaultConfig } from '@tamagui/config/v4';
import { shorthands } from '@tamagui/shorthands';
import { createTamagui } from 'tamagui';
import { interFont } from './tamagui.font';
import { themes, tokens } from './tamagui.theme';

export const config = createTamagui({
  ...defaultConfig,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    heading: interFont,
    body: interFont,
  },
  themes,
  tokens: {
    ...tokens,
    color: {
      color: '#0f172a', // default color
    },
  },
});

export type AppConfig = typeof config;

declare module 'tamagui' {
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
