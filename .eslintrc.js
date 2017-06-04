// @flow
module.exports = {
  'root': true,
  'parser': 'babel-eslint',
  'env': {
    'browser': true,
    'node': true,
    'commonjs': true,
    'shared-node-browser': true,
    'worker': true,
    'jest': true,
    'serviceworker': true,
    'es6': true
  },
  'parserOptions': {
    'ecmaVersion': 8,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true,
      'experimentalObjectRestSpread': true
    }
  },
  'extends': [
    //'standard',
    //'standard-jsx',
    //'standard-react',
    // @TODO: Fix fb-/fbjs redundancy
    './config/prepack-rules.eslintrc.js',
    'fbjs',
    'fbjs/strict',
    'fb-strict',
    'eslint:recommended',
    'plugin:jsx-a11y/recommended',
    //'plugin:node/recommended',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:lodash/recommended',
    'plugin:flowtype/recommended',
    'plugin:security/recommended',
    'plugin:css-modules/recommended',
    'plugin:you-dont-need-lodash-underscore/compatible'
  ],
  'plugins': [
    //'standard',
    'promise',
    'node',
    'import',
    'react',
    'flowtype',
    'lodash',
    'jsx-a11y',
    'jest',
    'babel',
    'html',
    'compat',
    'security',
    'eslint-comments',
    'css-modules',
    'header'
    //'jsdoc'
  ],
  'rules': {
    'header/header': [2, 'block', 'extra/header.js']
    'eslint-comments/disable-enable-pair': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'error',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',
    'eslint-comments/no-use': 'error',
    'semi': ['error', 'always']
  }
  //'settings': {
    //
  //}
};
