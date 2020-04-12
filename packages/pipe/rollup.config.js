import pkg from './package.json';
import { terser } from 'rollup-plugin-terser';

/**
 * A `string` used as copyright notice that is injected in generated bundles. It
 * contains package's name, version, author and license information.
 */
const banner = `/*!
 * ${pkg.name} v${pkg.version}
 * (c) ${pkg.author.name} <${pkg.author.email}> (${pkg.author.url})
 * Released under the MIT License.
 */
`;

/**
 * Creates an output options object.
 * @param {import('rollup').OutputOptions} options
 * @returns {import('rollup').OutputOptions}
 */
const Option = (options) => ({
  banner,
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
