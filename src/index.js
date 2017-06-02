// @flow

import _ from 'lodash';
import { add } from 'lodash/fp';

function component () {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello','!'], ' ');

  return element;
}

document.body.appendChild(component());

const addOne = add(1);
_.map([1, 2, 3], addOne);