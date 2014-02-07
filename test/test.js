/*global describe, it */
'use strict';

var assert = require('assert');
var executable = require('../');
var path = require('path');

describe('executable()', function () {
    it('should test executable and return true', function (cb) {
        var file = path.join(__dirname, 'fixtures/optipng');

        executable(file, function (err, exec) {
            cb(assert.equal(exec, true));
        });
    });

    it('should test executable synchronously and return true', function (cb) {
        var file = path.join(__dirname, 'fixtures/optipng');

        cb(assert.equal(executable.sync(file), true));
    });
});
