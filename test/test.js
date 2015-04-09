'use strict';

var path = require('path');
var test = require('ava');
var executable = require('../');

test('test executable and return true', function (t) {
	t.plan(2);

	executable(path.join(__dirname, 'fixtures/optipng'), function (err, exec) {
		t.assert(!err, err);
		t.assert(exec, exec);
	});
});

test('test executable synchronously and return true', function (t) {
	t.plan(1);
	var bin = path.join(__dirname, 'fixtures/optipng');
	t.assert(executable.sync(bin), executable.sync(bin));
});

test('test non-executable', function (t) {
	t.plan(2);

	executable(path.join(__dirname, '../readme.md'), function (err, exec) {
		t.assert(!err, err);
		t.assert(!exec, exec);
	});
});
