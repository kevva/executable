'use strict';

var fs = require('fs');

/**
 * Check if a file is executable
 *
 * @param {String} name
 * @param {Function} cb
 * @api public
 */

module.exports = function (name, cb) {
    fs.stat(name, function (err, stats) {
        if (err) {
            return cb(err);
        }

        if (stats && stats.isFile() && stats.mode.toString(8) === '100755') {
            return cb(null, true);
        }

        return cb(null, false);
    });
};

/**
 * Sync version
 *
 * @param {String} name
 * @api public
 */

module.exports.sync = function (name) {
    var file = fs.statSync(name);

    if (file && file.isFile() && file.mode.toString(8) === '100755') {
        return true;
    }

    return false;
};
