/*
 * This is the entrypoint of all the JavaScript files.
 */

import Routes from './routes';

document.addEventListener('DOMContentLoaded', main);

function main () {
  window.Routes = new Routes();
}