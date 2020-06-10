import { terser } from 'rollup-plugin-terser';

/**
 * Creates an output options object.
 * @param {import('rollup').OutputOptions} options
 * @returns {import('rollup').OutputOptions}
 */
const Option = (options) => ({
  exports: 'named',
  sourcemap: true,
  ...options,
});

/**
 * An object with all configuration for `Rollup.js`.
 * @type {import('rollup').RollupOptions}
 */
const options = {
  input: './src/json.js',
  output: [
    Option({
      file: './dist/json.js',
      format: 'commonjs',
    }),
    Option({
      file: './dist/json.esm.js',
      format: 'esm',
    }),
    Option({
      file: './dist/json.umd.js',
      name: 'Json',
      format: 'umd',
    }),
    Option({
      file: './dist/json.umd.min.js',
      name: 'Json',
      format: 'umd',
      plugins: [terser()],
    }),
  ],
};

export default options;
