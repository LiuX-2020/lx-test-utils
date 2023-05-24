import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import babel from 'rollup-plugin-babel'
import pkg from "./package.json";
const formatName = "lx-test-utils";
const entry = 'src/index.ts'
export default [
  {
    input: entry,
    plugins: [
      typescript(),
      resolve(),
      commonjs(),
      json(),
      babel({ exclude: 'node_modules/**' })
    ],
    output: [
      {
        file: pkg.main,
        format: "cjs",
      },
      {
        file: pkg.module,
        format: "esm",
      },
      {
        file: pkg.browser,
        format: "umd",
        name: formatName,
      },
    ],
  }
]
