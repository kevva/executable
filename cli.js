#!/usr/bin/env node
'use strict';
var meow = require('meow');
var executable = require('./');

var cli = meow([
	'Usage',
	'  $ executable <file>',
	'',
	'Example',
	'  $ executable optipng'
]);

if (!cli.input.length) {
	console.error('Filename required');
	process.exit(1);
}

executable(cli.input[0]).then(function (exec) {
	console.log(exec);
	process.exit(exec ? 0 : 1);
});
