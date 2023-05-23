import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {visualizer} from 'rollup-plugin-visualizer';

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    commonjs({
      ignore: [
        'fs',
        'path',
        'perf_hooks',
        'os',
      ],
    }),
    visualizer({
      sourcemap: true,
      filename: 'bundle.stats.html',
    }),
  ]
};
