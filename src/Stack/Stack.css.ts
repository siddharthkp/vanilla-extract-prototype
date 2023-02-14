import { style, styleVariants } from '@vanilla-extract/css';
import { primitives } from '../theme.css';

export const base = style({ display: 'flex' });

export const inline = style({ display: 'inline-flex' });

export const direction = styleVariants({
  horizontal: { flexDirection: 'row' },
  vertical: { flexDirection: 'column' }
});

export const justify = styleVariants({
  normal: { justifyContent: 'normal' },
  center: { justifyContent: 'center' },
  'space-between': { justifyContent: 'space-between' },
  'space-around': { justifyContent: 'space-around' },
  'space-evenly': { justifyContent: 'space-evenly' },
  stretch: { justifyContent: 'stretch' },
  'flex-start': { justifyContent: 'flex-start' },
  'flex-end': { justifyContent: 'flex-end' }
});

export const align = styleVariants({
  normal: { alignItems: 'normal' },
  center: { alignItems: 'center' },
  start: { alignItems: 'start' },
  end: { alignItems: 'end' }
});

export const gap = styleVariants({
  none: { gap: 0 },
  // we don't have a thing smaller than condensed in controlStack
  xsmall: { gap: primitives.primer.control.xsmall.gap },
  // these feel very odd, ngl
  condensed: { gap: primitives.primer.controlStack.medium.gap.condensed },
  normal: { gap: primitives.primer.controlStack.medium.gap.spacious },
  spacious: { gap: primitives.primer.controlStack.small.gap.spacious }
});
