import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';

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
  input: './src/index.js',
  plugins: [resolve()],
  output: [
    Option({
      file: './dist/Either.js',
      format: 'commonjs',
    }),
    Option({
      file: './dist/Either.esm.js',
      format: 'esm',
    }),
    Option({
      file: './dist/Either.mjs',
      format: 'esm',
    }),
    Option({
      file: './dist/Either.umd.js',
      name: 'Either',
      format: 'umd',
    }),
    Option({
      file: './dist/Either.umd.min.js',
      name: 'Either',
      format: 'umd',
      plugins: [terser()],
    }),
  ],
};

export default options;
