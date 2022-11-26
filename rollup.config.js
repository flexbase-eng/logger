import typescript from '@rollup/plugin-typescript'
import pkg from './package.json' assert { type: 'json' };

export default {
  input: 'src/index.ts',
  output: [{
    file: pkg.main, format: 'cjs',
  },
  {
    file: pkg.module, format: 'es',
  },
  {
    file: pkg.umd, format: 'umd', name: 'flexbaseLogger'
  }],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    typescript()
  ],
}