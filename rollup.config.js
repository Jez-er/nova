import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import pkg from './package.json'

export default [
	// ESM & CJS builds
	{
		input: 'src/index.ts',
		output: [
			{
				file: pkg.module,
				format: 'esm',
				sourcemap: true,
			},
			{
				file: pkg.main,
				format: 'cjs',
				sourcemap: true,
			},
		],
		plugins: [resolve(), typescript({ tsconfig: './tsconfig.json' })],
	},
	// Type definitions
	{
		input: 'dist/types/index.d.ts',
		output: [{ file: 'dist/index.d.ts', format: 'esm' }],
		plugins: [dts()],
	},
]
