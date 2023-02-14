import { style } from '@vanilla-extract/css';
import { primitives } from '../theme.css';

export const avatar = style({
  width: primitives.primer.control.large.size,
  height: primitives.primer.control.large.size,
  borderRadius: primitives.radii.full
});

export const link = style({
  textDecoration: 'none',
  color: primitives.colors.accent.fg
});
