import typescript from 'rollup-plugin-ts';

export default {
  input: 'src/main.ts',
  output: [{
    file: 'dist/bundle.min.js',
    format: 'iife',
    name: 'client'
  }],
  plugins: [
    typescript()
  ]
};
