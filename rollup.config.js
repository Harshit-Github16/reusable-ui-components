import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import url from '@rollup/plugin-url';

export default {
  input: 'src/components/index.tsx',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src/components',
      exports: 'named'
    },
    {
      dir: 'dist/esm',
      format: 'esm',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src/components'
    }
  ],
  external: [
    'react',
    'react-dom',
    '@fortawesome/fontawesome-svg-core',
    '@fortawesome/free-solid-svg-icons',
    '@fortawesome/react-fontawesome',
    /^next($|\/)/,
    /^node:.*/
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }),
    commonjs(),
    url({
      include: ['**/*.svg'],
      limit: Infinity
    }),
    typescript({
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true,
      declarationDir: './dist',
      declaration: true
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
      plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        require('autoprefixer')
      ]
    }),
    copy({
      targets: [
        { src: 'public/images', dest: 'dist' }
      ]
    })
  ],
  onwarn: function (warning, warn) {
    if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
    warn(warning);
  }
};
