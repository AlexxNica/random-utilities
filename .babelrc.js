// @flow
'use strict';

const configPresets = [
  ['env', {
    'targets': {
      'node': 'current',
      'browsers': ['last 2 versions']
    },
    'useBuiltIns': 'usage',
    'debug': true,
    'test': {
      'plugins': [
        'transform-es2015-modules-commonjs',
        'dynamic-import-node'
      ]
    }
  }],
  'stage-0',
  'flow',
  'react',
  'jest'
];

const configPlugins = [
  'lodash',
  'transform-flow-strip-types',
  'syntax-dynamic-import'
];

module.exports = {
  plugins: configPlugins,
  presets: configPresets
}
