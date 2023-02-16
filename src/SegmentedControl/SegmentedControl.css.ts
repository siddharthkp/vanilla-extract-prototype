import { style, styleVariants } from '@vanilla-extract/css';
import { primitives, viewportRange } from '../theme.css';

export const ul = style({
  backgroundColor: primitives.colors.segmentedControl.bg,
  borderColor: primitives.colors.border.default,
  borderRadius: primitives.radii[6],
  borderStyle: 'solid',
  borderWidth: '1px',
  margin: 0,
  padding: 0,
  listStyle: 'none',
  fontSize: primitives.primer.text.body.size.medium,
  height: primitives.primer.control.medium.size
});

const fullWidthStyles = {
  display: 'flex',
  width: '100%',
  vars: { '--li-width': '100%' }
};

const narrowWidthStyles = {
  display: 'inline-flex',
  width: 'fit-content',
  vars: { '--li-width': 'fit-content' }
};

export const fullWidth = {
  narrow: styleVariants({
    true: {
      // using viewportRange instead of primitives.viewportRange
      // because createTheme converts it to a css variable which
      // are not allowed in media queries (css spec)
      '@media': {
        [`screen and ${viewportRange.narrow}`]: fullWidthStyles
      }
    },
    false: {
      '@media': {
        [`screen and ${viewportRange.narrow}`]: narrowWidthStyles
      }
    }
  }),

  regular: styleVariants({
    true: { '@media': { [`screen and ${viewportRange.regular}`]: fullWidthStyles } },
    false: { '@media': { [`screen and ${viewportRange.regular}`]: narrowWidthStyles } }
  }),
  wide: styleVariants({
    true: { '@media': { [`screen and ${viewportRange.wide}`]: fullWidthStyles } },
    false: { '@media': { [`screen and ${viewportRange.wide}`]: narrowWidthStyles } }
  })
};

export const size = styleVariants({
  small: {
    fontSize: primitives.primer.text.body.size.small,
    height: primitives.primer.control.small.size
  },
  default: {
    fontSize: primitives.primer.text.body.size.medium,
    height: primitives.primer.control.medium.size
  }
});

export const li = style({
  position: 'relative',
  width: 'var(--li-width)',

  '::after': {
    content: '""',
    backgroundColor: primitives.colors.border.default,
    position: 'absolute',
    right: '-2px',
    top: 8,
    bottom: 8,
    width: 1,
    // can be set in javascript
    opacity: 'var(--seperator-opacity, 0)'
  }
});

export const seperator = style({
  vars: { '--seperator-opacity': '1' }
});

export const button = style({
  // setting css variables like this isn't allowed
  // need to do it like this:
  // [SegmentedControlButtonInnerPadding]: primitives.primer.control.medium.paddingInline.normal
  // '--segmented-control-button-bg-inset': '4px',

  // display: 'inline-flex',
  // alignItems: 'center',

  backgroundColor: 'transparent',
  border: '1px solid',
  borderColor: 'transparent',
  borderRadius: primitives.radii[6],
  color: primitives.colors.btn.text,
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontWeight: primitives.base.text.weight.normal,
  width: '100%',
  height: `calc(${primitives.primer.control.medium.size} + 2px)`,
  padding: `0 ${primitives.primer.control.xsmall.paddingInline.condensed}`,

  selectors: {
    // [`&:hover ${content}`]: { // this is not allowed, "This is to ensure that each style block only affects the styling of a single class."
    // have to write it child

    'li[data-selected=true] &': {
      background: primitives.colors.btn.bg,
      borderColor: primitives.colors.segmentedControl.button.selected.border,
      fontWeight: primitives.base.text.weight.semibold
    },
    'li:first-child &': {
      marginLeft: -1,
      marginRight: 1
    }
  }
});

export const content = style({
  height: primitives.primer.control.xsmall.size,
  padding: `0 ${primitives.primer.control.small.paddingInline.condensed}`,
  borderRadius: primitives.radii[3],
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',

  selectors: {
    [`li:not([data-selected=true]) ${button}:hover &`]: {
      backgroundColor: primitives.colors.segmentedControl.button.hover.bg
    }
  }
});

// such a cool hack to make sure the size of the button
// doesn't change with font weight
export const hiddenBoldContent = style([
  content,
  {
    fontWeight: primitives.base.text.weight.semibold,
    height: 0,
    overflow: 'hidden',
    pointerEvents: 'none',
    userSelect: 'none'
  }
]);
