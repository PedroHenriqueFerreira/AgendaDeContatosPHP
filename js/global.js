import submitEvent from './events/submits.js';
import keyupEvent from './events/keyups.js';
import changeEvent from './events/change.js';
import clickEvent from './events/clicks.js';

document.addEventListener('DOMContentLoaded', () => {
  var elem = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elem);

  document.addEventListener('submit', submitEvent);
  document.addEventListener('keyup', keyupEvent);
  document.addEventListener('change', changeEvent);
  document.addEventListener('click', clickEvent);

});