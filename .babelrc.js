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

/* @TODO: configure properly
if (process.env.BABEL_ENV === 'development') {
  envOpts.targets = {
    node: "current"
  };
  envOpts.debug = true;
};*/

module.exports = {
  //extends: configExtends,
  plugins: configPlugins,
  presets: configPresets,
  //ignore: configIgnore
}
