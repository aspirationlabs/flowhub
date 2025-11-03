import { Theme, ThemeColors } from '../../../types/theme.js';

export const FONT_FAMILY = '"SF Pro Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';

export const THEME_COLORS: Record<Theme, ThemeColors> = {
  light: {
    background: '#ffffff',
    text: '#000000',
  },
  dark: {
    background: '#1a1a1a',
    text: '#ffffff',
  },
};
