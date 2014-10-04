#!/usr/bin/env node
'use strict';

var executable = require('./');
var input = process.argv.slice(2);
var pkg = require('./package.json');

/**
 * Help screen
 */

function help() {
	console.log([
		'',
		'  ' + pkg.description,
		'',
		'  Usage',
		'    executable <file>',
		'',
		'  Example',
		'    executable optipng'
	].join('\n'));
}

/**
 * Show help
 */

if (input.indexOf('-h') !== -1 || input.indexOf('--help') !== -1) {
	help();
	return;
}

/**
 * Show package version
 */

if (input.indexOf('-v') !== -1 || input.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

/**
 * Run
 */

executable(input[0], function (err, exec) {
	if (err) {
		console.error(err);
		process.exit(1);
	}

	console.log(exec ? 'true' : 'false');
	process.exit(exec ? 0 : 1);
});
