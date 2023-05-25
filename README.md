# TFJS Wasm in JS
This repository is an example of how to bundle the TFJS wasm backend files, including the `.wasm` files, into a single javascript file using Rollup. It uses `rollup-plugin-base64` to encode the files as base64 strings and then loads them by passing them as Blob urls to the wasm backend.
