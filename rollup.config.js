
import commonjs from 'rollup-plugin-commonjs';
import scss from 'rollup-plugin-scss';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/bundle.js',
        format: 'umd',
        name: "TestMultiSelect",
        globals: {
            "react": "React",
            "react-dom": "reactDom"
        }
    },
    external: [
        'react',
        'react-dom',
    ],
    plugins: [
        resolve(),
        typescript(),
        commonjs()
    ]
}