/*global describe, it */
'use strict';

var assert = require('assert');
var executable = require('../');
var path = require('path');

describe('executable()', function () {
    it('should be executable', function (cb) {
        var file = path.join(__dirname, 'fixtures/optipng');
        cb(assert.equal(executable(file), true));
    });

    it('should not be executable', function (cb) {
        var file = path.join(__dirname, '../index.js');
        cb(assert.equal(executable(file), false));
    });
});
