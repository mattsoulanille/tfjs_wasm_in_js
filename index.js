/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

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
  // More code goes here
}

main();
