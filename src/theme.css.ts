import { createTheme } from '@vanilla-extract/css';
import { deepmerge } from 'deepmerge-ts';

import baseSizePrimitives from '@primer/primitives/tokens-v2-private/ts/tokens/base/size/size';
import functionalSizePrimitives from '@primer/primitives/tokens-v2-private/ts/tokens/functional/size/size';

import baseTypographyPrimitives from '@primer/primitives/tokens-v2-private/ts/tokens/base/typography/typography';
import functionalTypographyPrimitives from '@primer/primitives/tokens-v2-private/ts/tokens/functional/typography/typography';

import lightThemeColors from '@primer/primitives/dist/ts/colors/light';
import darkThemeColors from '@primer/primitives/dist/ts/colors/dark';

export const viewportRange = {
  // narrow: '(max-width: calc(48rem - 0.02px))',
  // calc doesn't work here
  narrow: '(max-width: 48rem)',
  regular: '(min-width: 48rem)',
  wide: '(min-width: 90rem)'
};

const size = {
  ...baseSizePrimitives,
  ...functionalSizePrimitives
  // we don't put viewportRange here because createTheme converts them to css variables
  // which are not allowed in media queries
  // viewportRange
};

const radii = { 0: '0', 3: '3px', 6: '6px', full: '100px' };

// arrays are not allowed in theme
const convertArraysToObject = (original: typeof lightThemeColors) => {
  // shallow clone
  const { scale, ...transformed } = original;
  // @ts-ignore TODO
  transformed['scale'] = {};

  Object.keys(original.scale).forEach((scaleKey) => {
    // @ts-ignore TODO
    if (Array.isArray(original.scale[scaleKey])) {
      // @ts-ignore TODO
      const scale: [{ [key: string]: string }] = original.scale[scaleKey];
      // @ts-ignore TODO
      transformed['scale'][scaleKey] = {};
      Object.keys(scale).forEach((value, index) => {
        // @ts-ignore TODO
        transformed['scale'][scaleKey][index] = value;
      });
    } else {
      // @ts-ignore TODO
      transformed['scale'][scaleKey] = original.scale[scaleKey];
    }
  });

  return transformed;
};

const merged = deepmerge(size, baseTypographyPrimitives, functionalTypographyPrimitives, { radii });

const [lightThemeClass, primitives] = createTheme({
  ...merged,
  colors: convertArraysToObject(lightThemeColors)
});

const darkThemeClass = createTheme(primitives, {
  ...merged,
  colors: convertArraysToObject(darkThemeColors)
});

export { primitives, lightThemeClass, darkThemeClass };
