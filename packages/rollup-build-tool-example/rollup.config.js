import typescript from '@rollup/plugin-typescript';
import packageJson from './package.json';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
    input:  'src/index.ts',
    output: [
        { file: packageJson.main, format: 'cjs', sourcemap: true },
        { file: packageJson.module, format: 'esm', sourcemap: true }
    ],
    plugins: [
        typescript({
            tsconfig: './tsconfig.json'
        })
    ]
};