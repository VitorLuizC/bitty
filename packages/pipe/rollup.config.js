import { terser } from 'rollup-plugin-terser';

/**
 * Creates an output options object.
 * @param {import('rollup').OutputOptions} options
 * @returns {import('rollup').OutputOptions}
 */
const Option = (options) => ({
  exports: 'default',
  sourcemap: true,
  ...options,
});

/**
 * An object with all configuration for `Rollup.js`.
 * @type {import('rollup').RollupOptions}
 */
const options = {
  input: './src/pipe.js',
  output: [
    Option({
      file: './dist/pipe.js',
      format: 'commonjs',
    }),
    Option({
      file: './dist/pipe.esm.js',
      format: 'esm',
    }),
    Option({
      file: './dist/pipe.mjs',
      format: 'esm',
    }),
    Option({
      file: './dist/pipe.umd.js',
      name: 'pipe',
      format: 'umd',
    }),
    Option({
      file: './dist/pipe.umd.min.js',
      name: 'pipe',
      format: 'umd',
      plugins: [terser()],
    }),
  ],
};

export default options;
