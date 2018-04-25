import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import uglify from 'rollup-plugin-uglify';

export const devConfig = {
    input: 'src/main.ts',
    output: {
        file: 'dist/galaxy.js',
        format: 'iife',
        sourcemap: true
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript()
    ]
};

export const releaseConfig = {
    input: 'src/main.ts',
    output: {
        file: 'dist/galaxy.min.js',
        format: 'iife',
        sourcemap: 'inline'
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript(),
        uglify()
    ]
}
