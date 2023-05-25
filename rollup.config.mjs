import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {visualizer} from 'rollup-plugin-visualizer';
//import {wasm} from '@rollup/plugin-wasm';
import {base64} from 'rollup-plugin-base64';

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
    // wasm({
    //   maxFileSize: 1e7, // 10mb
    // }),
    base64({
      include: '**/*.wasm'//'node_modules/@tensorflow/tfjs-backend-wasm/src/*.wasm',
    }),
    visualizer({
      sourcemap: true,
      filename: 'bundle.stats.html',
    }),
  ]
};
