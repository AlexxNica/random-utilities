// @flow

const moduleFileExtensions = [
  'js',
  'jsx',
  'ts',
  'tsx'
];

const moduleNameMapper = {
  '^[./a-zA-Z0-9$_-]+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp)$': 'RelativeImageStub'
};
//const setupFiles = [
//  "<rootDir>/node_modules/random-utilities/jest/setup.js",
//  "<rootDir>/node_modules/random-utilities/jest/setup.js"
//];

module.exports = {
  verbose: true,
  moduleNameMapper: moduleNameMapper,
  moduleFileExtensions: moduleFileExtensions
//  setupFiles: setupFiles
};
