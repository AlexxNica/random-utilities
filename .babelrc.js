// @flow
"use strict";

const configPresets = [
  ["env", {
    "targets": {
      "node": "current",
      "browsers": ["last 2 versions"]
    },
    "useBuiltIns": "usage",
    "debug": true
  }],
  "stage-0",
  "flow",
  "react"
];

const configPlugins = [
  "lodash",
  "transform-flow-strip-types",
  //["module-resolver", {
  //  "root": ["./src"],
  //  "alias": {
  //    "test": "./test",
  //    "underscore": "lodash"
  //  }
  //}]
];

//const configIgnore = [
//  "node_modules/**/*.js"
//];

module.exports = {
  //extends: configExtends,
  plugins: configPlugins,
  presets: configPresets,
  //ignore: configIgnore
}
