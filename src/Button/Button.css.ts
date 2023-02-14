import { style, styleVariants, globalStyle } from '@vanilla-extract/css';
import { primitives } from '../theme.css';

const TEXT_ROW_HEIGHT = '20px'; // custom value off the scale

export const base = style({
  borderRadius: primitives.radii[6],
  border: '1px solid',
  fontFamily: 'inherit',
  fontWeight: primitives.base.text.weight.semibold,
  borderColor: primitives.colors.btn.border,
  fontSize: primitives.base.text.weight.semibold,
  lineHeight: TEXT_ROW_HEIGHT,
  whiteSpace: 'nowrap',
  verticalAlign: 'middle',
  cursor: 'pointer',
  appearance: 'none',
  userSelect: 'none',
  textDecoration: 'none',
  textAlign: 'center',
  ':disabled': { cursor: 'default' },

  // child selectors are not allowed, wild!
  // ':disabled svg': { opacity: '0.6' }

  // different syntax for media
  '@media': {
    '(forced-colors: active)': {
      ':focus': {
        // Support for Windows high contrast https://sarahmhigley.com/writing/whcm-quick-tips
        outline: 'solid 1px transparent'
      }
    }
  }
});

// this is the way to add child syntax?
globalStyle(`${base}:disabled svg`, {
  opacity: 0.6
});

export const variants = {
  appearance: styleVariants({
    default: {
      backgroundColor: primitives.colors.btn.bg,
      color: primitives.colors.btn.text,
      ':hover': {
        backgroundColor: primitives.colors.btn.hoverBg
      },
      ':active': {
        backgroundColor: primitives.colors.btn.activeBg,
        borderColor: primitives.colors.btn.activeBorder
      },
      ':disabled': {
        backgroundColor: primitives.colors.btn.bg,
        color: primitives.colors.primer.fg.disabled
        // '[data-component=ButtonCounter]': { color: 'inherit' }
      },
      '&[aria-expanded=true]': {
        backgroundColor: primitives.colors.btn.activeBg,
        borderColor: primitives.colors.btn.activeBorder
      }
    },
    primary: {
      color: primitives.colors.btn.primary.text,
      backgroundColor: primitives.colors.btn.primary.bg,
      borderColor: primitives.colors.border.subtle,
      ':hover': {
        backgroundColor: primitives.colors.btn.primary.hoverBg
      },
      ':active': {
        backgroundColor: primitives.colors.btn.primary.selectedBg
      },
      ':disabled': {
        color: primitives.colors.btn.primary.disabledText,
        backgroundColor: primitives.colors.btn.primary.disabledBg,
        '& [data-component=ButtonCounter]': { color: 'inherit' }
      }
    },
    danger: {
      color: primitives.colors.btn.danger.text,
      backgroundColor: primitives.colors.btn.bg,
      ':hover': {
        color: primitives.colors.btn.danger.hoverText,
        backgroundColor: primitives.colors.btn.danger.hoverBg,
        borderColor: primitives.colors.btn.danger.hoverBorder
        // '[data-component=ButtonCounter]': {
        //   backgroundColor: primitives.colors.btn.danger.hoverCounterBg,
        //   color: primitives.colors.btn.danger.hoverText
        // }
      },
      ':active': {
        color: primitives.colors.btn.danger.selectedText,
        backgroundColor: primitives.colors.btn.danger.selectedBg,
        borderColor: primitives.colors.btn.danger.selectedBorder
      },
      ':disabled': {
        color: primitives.colors.btn.danger.disabledText,
        backgroundColor: primitives.colors.btn.danger.disabledBg
        // borderColor: primitives.colors.btn.danger.disabledBorder,
        // '[data-component=ButtonCounter]': {
        //   color: 'inherit',
        //   backgroundColor: primitives.colors.btn.danger.disabledCounterBg
        // }
      }
      // '[data-component=ButtonCounter]': {
      //   color: primitives.colors.btn.danger.text,
      //   backgroundColor: primitives.colors.btn.danger.counterBg
      // },
      // '&[aria-expanded=true]': {
      //   color: primitives.colors.btn.danger.selectedText,
      //   backgroundColor: primitives.colors.btn.danger.selectedBg,
      //   borderColor: primitives.colors.btn.danger.selectedBorder
      // }
    },
    invisible: {
      color: primitives.colors.accent.fg,
      backgroundColor: 'transparent',
      border: 'none',
      boxShadow: 'none',
      selectors: {
        '&:hover:not(:disabled)': {
          backgroundColor: primitives.colors.btn.hoverBg
        },
        '&:active:not(:disabled)': {
          backgroundColor: primitives.colors.btn.selectedBg
        },
        '&:disabled': {
          color: primitives.colors.primer.fg.disabled
          // '[data-component=ButtonCounter]': { color: 'inherit' }
        },
        '&[aria-expanded=true]': {
          backgroundColor: primitives.colors.btn.selectedBg
        }
      }
    },
    outline: {
      color: primitives.colors.btn.outline.text,
      borderColor: primitives.colors.btn.border,
      backgroundColor: primitives.colors.btn.bg,
      selectors: {
        '&:hover:not(:disabled)': {
          color: primitives.colors.btn.outline.hoverText,
          backgroundColor: primitives.colors.btn.outline.hoverBg,
          borderColor: primitives.colors.btn.outline.hoverBorder
          // '[data-component=ButtonCounter]': {
          //   backgroundColor: 'btn.outline.hoverCounterBg',
          //   color: 'inherit'
          // }
        },
        '&:active:not([disabled])': {
          color: primitives.colors.btn.outline.selectedText,
          backgroundColor: primitives.colors.btn.outline.selectedBg,
          borderColor: primitives.colors.btn.outline.selectedBorder
        },
        '&:disabled': {
          color: primitives.colors.btn.outline.disabledText,
          backgroundColor: primitives.colors.btn.outline.disabledBg,
          borderColor: primitives.colors.btn.border
          // '[data-component=ButtonCounter]': {
          //   backgroundColor: 'btn.outline.disabledCounterBg',
          //   color: 'inherit'
          // }
        },
        '&[aria-expanded=true]': {
          color: primitives.colors.btn.outline.selectedText,
          backgroundColor: primitives.colors.btn.outline.selectedBg,
          borderColor: primitives.colors.btn.outline.selectedBorder
        }
      }
      // '[data-component=ButtonCounter]': {
      //   backgroundColor: primitives.colors.btn.outline.counterBg,
      //   color: primitives.colors.btn.outline.tex'
      // },
    }
  }),
  size: styleVariants({
    small: {
      height: primitives.primer.control.small.size,
      fontSize: primitives.primer.text.body.size.small,
      padding: `${primitives.primer.control.small.paddingBlock} ${primitives.primer.control.small.paddingInline.condensed}`
    },
    medium: {
      height: primitives.primer.control.medium.size,
      fontSize: primitives.primer.text.body.size.medium,
      padding: `${primitives.primer.control.medium.paddingBlock} ${primitives.primer.control.medium.paddingInline.normal}`
    },
    large: {
      height: primitives.primer.control.large.size,
      fontSize: primitives.primer.text.body.size.large,
      padding: `${primitives.primer.control.large.paddingBlock} ${primitives.primer.control.large.paddingInline.normal}`
    }
  })
};

globalStyle(`${variants.appearance.primary}[aria-expanded=true]`, {
  backgroundColor: primitives.colors.btn.primary.selectedBg
});

globalStyle(`${variants.appearance.primary} [data-component=ButtonCounter]`, {
  backgroundColor: primitives.colors.btn.primary.counterBg,
  color: primitives.colors.btn.primary.text
});

export const leadingIcon = style({
  display: 'inline-block',
  marginRight: primitives.primer.control.medium.gap
});
export const trailingIcon = style({
  display: 'inline-block',
  marginLeft: primitives.primer.control.large.gap
});
export const counter = style({
  display: 'inline-block',
  fontSize: primitives.primer.text.body.size.small,
  fontWeight: primitives.base.text.weight.semibold,
  backgroundColor: primitives.colors.neutral.muted,
  color: primitives.colors.fg.default,
  marginLeft: primitives.primer.control.medium.gap,

  // magic numbers?
  padding: '2px 5px',
  lineHeight: 1,
  borderRadius: '20px'
});
