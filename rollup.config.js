import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/ui-components/index.jsx',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src/ui-components'
    },
    {
      dir: 'dist/esm',
      format: 'esm',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src/ui-components'
    }
  ],
  external: [
    'react',
    'react-dom',
    '@fortawesome/fontawesome-svg-core',
    '@fortawesome/free-solid-svg-icons',
    '@fortawesome/react-fontawesome',
    'next/dynamic'
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true
    }),
    babel({
      babelHelpers: 'bundled',
      presets: ['@babel/preset-react', '@babel/preset-typescript'],
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    postcss({
      extract: true,
      minimize: true,
      sourceMap: true,
      config: {
        path: './postcss.config.mjs',
      },
    }),
  ],
  onwarn: function (warning, warn) {
    // Suppress specific warnings that are safe to ignore for this build setup
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
      return; // Ignore 'use client' and similar directives
    }
    // Pass all other warnings through
    warn(warning);
  }
}; 