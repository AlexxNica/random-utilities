// @flow
'use strict';

const configPresets = [
  ['env', {
    'targets': {
      'node': 'current',
      'browsers': ['last 2 versions']
    },
    'useBuiltIns': 'usage',
    'debug': true
  }],
  'stage-0',
  'flow',
  'react'
];

const configPlugins = [
  'lodash',
  'transform-flow-strip-types'
];

module.exports = {
  plugins: configPlugins,
  presets: configPresets
}
