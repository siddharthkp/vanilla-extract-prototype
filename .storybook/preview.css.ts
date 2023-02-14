import { globalStyle } from '@vanilla-extract/css';
import { primitives } from '../src/theme.css';

globalStyle('body', {
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
  backgroundColor: primitives.colors.canvas.default,
  color: primitives.colors.fg.default
});
