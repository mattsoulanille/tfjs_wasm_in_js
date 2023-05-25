import * as tf from '@tensorflow/tfjs-core';
import '@tensorflow/tfjs-core/dist/public/chained_ops/register_all_chained_ops';
import '@tensorflow/tfjs-backend-wasm';
import {setWasmPaths} from '@tensorflow/tfjs-backend-wasm';
import wasm from '@tensorflow/tfjs-backend-wasm/dist/tfjs-backend-wasm.wasm';
import wasmSimd from '@tensorflow/tfjs-backend-wasm/dist/tfjs-backend-wasm-simd.wasm';
import wasmThreaded from '@tensorflow/tfjs-backend-wasm/dist/tfjs-backend-wasm-threaded-simd.wasm';

// TODO(mattSoulanille): tfjs-backend-wasm should probably support passing
// the wasm data directly instead of needing to load it from a URL.
function makeUrl(s) {
  const wasmBuffer = Buffer.from(s, 'base64');
  const wasmBlob = new Blob([wasmBuffer]);
  const wasmUrl = URL.createObjectURL(wasmBlob);
  return wasmUrl;
}

async function main() {
  // TODO(mattSoulanille): You shouldn't have to set all the wasm paths
  // if you know which one you want to use.
  setWasmPaths({
    'tfjs-backend-wasm.wasm': makeUrl(wasm),
    'tfjs-backend-wasm-simd.wasm': makeUrl(wasmSimd),
    'tfjs-backend-wasm-threaded-simd.wasm': makeUrl(wasmThreaded),
  }, /* use platform fetch */ true);

  await tf.setBackend('wasm');
  tf.tensor1d([1,2,3]).add(tf.tensor1d([4,5,6])).print();
}

main();
