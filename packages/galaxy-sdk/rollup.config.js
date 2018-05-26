const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const typescript = require('rollup-plugin-typescript2');
const uglify = require('rollup-plugin-uglify');

const devConfig = {
    input: 'src/index.ts',
    output: {
        file: 'dist/galaxy.js',
        format: 'iife',
        sourcemap: 'inline'
    },
    plugins: [resolve(), commonjs(), typescript()]
};

const releaseConfig = {
    input: 'src/index.ts',
    output: {
        file: 'dist/galaxy.min.js',
        format: 'iife',
        sourcemap: 'inline'
    },
    plugins: [resolve(), commonjs(), typescript(), uglify()]
};

const importCodeConfig = {
    input: 'src/import_code/async_imoprt.ts',
    output: {
        file: 'dist/import.min.js',
        format: 'iife',
        sourcemap: false
    },
    plugins: [resolve(), commonjs(), typescript(), uglify()]
};

module.exports = {
    devConfig,
    releaseConfig,
    importCodeConfig
};
