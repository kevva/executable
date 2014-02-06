/*global describe, it */
'use strict';

var assert = require('assert');
var executable = require('../');
var path = require('path');

describe('executable()', function () {
    it('should be executable', function (cb) {
        var file = path.join(__dirname, 'fixtures/optipng');
        executable(file, function (err, exec) {
            cb(assert.equal(exec, true));
        });
    });

    it('should not be executable', function (cb) {
        var file = path.join(__dirname, '../index.js');
        executable(file, function (err, exec) {
            cb(assert.equal(exec, false));
        });
    });
});
