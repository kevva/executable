'use strict';

var fs = require('fs');

/**
 * Check if a file is executable
 *
 * @param {String} name
 * @api public
 */

module.exports = function (name) {
    var file = fs.statSync(name);
    var mode = file.mode.toString(8);

    if (file && file.isFile() && mode === '100755') {
        return true;
    }

    return false;
};
