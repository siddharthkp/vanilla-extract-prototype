import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { vanillaExtractPlugin } from '@vanilla-extract/rollup-plugin';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: ['src/index.ts'],
  output: {
    interop: 'auto',
    dir: 'lib-esm',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src'
  },
  plugins: [
    typescript(),
    commonjs({ extensions }),
    resolve({ extensions }),
    vanillaExtractPlugin({ extensions: 'debug' })
  ],
  external: ['react', 'react-dom']
};
