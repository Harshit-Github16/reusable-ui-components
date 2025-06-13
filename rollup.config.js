import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { defineConfig } from 'rollup';
import { readFileSync } from 'fs';

const packageJson = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)));

export default defineConfig({
  input: 'src/ui-components/index.jsx',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx']
    }),
    commonjs(),
    babel({ 
      babelHelpers: 'bundled', 
      exclude: 'node_modules/**', 
      presets: ['@babel/preset-react'],
      extensions: ['.js', '.jsx']
    }),
  ],
  external: ['react', 'react-dom'],
}); 