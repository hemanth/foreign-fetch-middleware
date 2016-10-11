'use strict';
var fileExists = require('fs').exists;
module.exports = FSWpath => (req, res, next) => {
  fileExists(FSWpath, (exists) => {
    if (exists) {
        res.setHeader('Link', `</${FSWpath}>; rel="serviceworker"`);
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
    } else {
      throw new Error(`SW NOT FOUND! Expecting a service work at: ${path}`);
    }
  });
};
