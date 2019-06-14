import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript'

const plugins = [typescript(), commonjs()]

export default [
  {
    input: 'src/main.ts',
    output: {
      file: 'index.js',
      format: 'umd',
      name: 'hyper-monokai',
      sourcemap: false
    },
    plugins
  }
]
