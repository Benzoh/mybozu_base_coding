import _ from 'lodash';
import 'bootstrap';

function component() {
  var element = document.createElement('div');
  element.classList.add("alert", "alert-info", "m-3");
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  return element;
}

document.body.appendChild(component());