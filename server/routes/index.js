/* eslint-disable global-require */
const fs = require('fs');

module.exports = (app) => {
  // API routes
  fs.readdirSync(`${__dirname}/api/`).forEach((file) => {
    // eslint-disable-next-line import/no-dynamic-require
    require(`./api/${file.substr(0, file.indexOf('.'))}`)(app);
  });
};
