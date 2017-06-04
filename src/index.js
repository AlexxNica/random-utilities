// @flow

import _ from 'lodash';
// $FlowFixMe
import { add } from 'lodash/fp';
import React from 'react';
import ReactDOM from 'react-dom';

function component () {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', '!'], ' ');

  return element;
}

// $FlowFixMe
document.body.appendChild(component());

const addOne = add(1);
_.map([1, 2, 3], addOne);

ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
