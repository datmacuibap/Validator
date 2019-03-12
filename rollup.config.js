import babel from 'rollup-plugin-babel';

var babelOptions = {
    presets: [['@babel/env', { modules: false }]],
    exclude: 'node_modules/**'
};

export default {
    input: 'src/Validator.js',
    output: {
        format: 'cjs',
        file: 'dist/Validator.js'
    },
    plugins: [babel(babelOptions)]
};
