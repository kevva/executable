'use strict';
var path = require('path');
var test = require('ava');
var executable = require('../');

test('test executable and return true', function (t) {
	t.plan(1);

	executable(path.join(__dirname, 'fixtures/optipng')).then(function (exec) {
		t.assert(exec, exec);
	});
});

test('test non-executable', function (t) {
	t.plan(1);

	executable(path.join(__dirname, '../readme.md')).then(function (exec) {
		t.assert(!exec, exec);
	});
});
