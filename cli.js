#!/usr/bin/env node
'use strict';

var executable = require('./');
var meow = require('meow');

var cli = meow({
	help: [
		'Usage',
		'  $ executable <file>',
		'',
		'Example',
		'  $ executable optipng'
	].join('\n')
});

if (!cli.input.length) {
	console.error([
		'Specify a filename',
		'',
		'Example',
		'  $ executable optipng'
	].join('\n'));

	process.exit(1);
}

executable(cli.input[0], function (err, exec) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log(exec ? 'true' : 'false');
	process.exit(exec ? 0 : 1);
});
