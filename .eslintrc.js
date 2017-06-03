// @flow
module.exports = {
  "root": true,
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "shared-node-browser": true,
    "worker": true,
    "jest": true,
    "serviceworker": true,
    "es6": true
  },
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "extends": [
    "standard",
    "standard-jsx",
    "standard-react",
    "plugin:jsx-a11y/recommended",
    "plugin:jest/recommended",
    "plugin:react/recommended",
    "plugin:lodash/recommended",
    "plugin:flowtype/recommended",
    "plugin:security/recommended",
    "plugin:css-modules/recommended",
    "plugin:you-dont-need-lodash-underscore/compatible"
    //"plugin:node/recommended",
    //"eslint:recommended"
  ],
  "plugins": [
    "standard",
    "promise",
    "node",
    "import",
    "react",
    "flowtype",
    "lodash",
    "jsx-a11y",
    "jest",
    "babel",
    "html",
    "compat",
    "security",
    "eslint-comments",
    "css-modules"
    //"jsdoc"
  ],
  "rules": {
    "eslint-comments/disable-enable-pair": "error",
    "eslint-comments/no-duplicate-disable": "error",
    "eslint-comments/no-unlimited-disable": "error",
    "eslint-comments/no-unused-disable": "error",
    "eslint-comments/no-unused-enable": "error",
    "eslint-comments/no-use": "error"
  }
  //"settings": {
    //
  //}
};
