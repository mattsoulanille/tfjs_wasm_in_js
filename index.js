import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-core/dist/public/chained_ops/register_all_chained_ops';
import '@tensorflow/tfjs-backend-wasm';
import { setWasmPaths } from '@tensorflow/tfjs-backend-wasm';

async function main() {
  setWasmPaths('node_modules/@tensorflow/tfjs-backend-wasm/dist/');
  await tf.setBackend('wasm');
  tf.tensor1d([1,2,3]).add(tf.tensor1d([4,5,6])).print();
}

main();
