import _ from 'lodash';
import lightbox from 'lightbox2';

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());
console.log(lightbox);