# TFJS Wasm in JS
This repository is an example of how to bundle the TFJS wasm backend files, including the `.wasm` files, into a single javascript file using Rollup. It uses `rollup-plugin-base64` to encode the files as base64 strings and then loads them by passing them as Blob urls to the wasm backend.

## Run the example

```shell
yarn
yarn bundle
node bundle.js
```

### Sample output:

```shell
$ yarn
<generic yarn output truncated since it's long>
$ yarn bundle
$ yarn bundle
yarn run v1.22.19
$ rollup -c

index.js → bundle.js...
(!) Broken sourcemap
https://rollupjs.org/troubleshooting/#warning-sourcemap-is-likely-to-be-incorrect
Plugins that transform code (such as "base64") should generate accompanying sourcemaps.
created bundle.js in 8.8s
Done in 9.09s.
$ node bundle.js
Tensor
    [5, 7, 9]
```
