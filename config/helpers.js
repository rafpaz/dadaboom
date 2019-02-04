const path = require('path');

// Helper functions
function root(args) {
  // eslint-disable-next-line prefer-rest-params
  args = Array.prototype.slice.call(arguments, 0);
  return path.join(...[__dirname].concat('../', ...args));
}

exports.root = root;
