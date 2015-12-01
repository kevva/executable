'use strict';
var fs = require('fs');
var pify = require('pify');
var Promise = require('pinkie-promise');

function isExe(mode, gid, uid) {
	if (process.platform === 'win32') {
		return true;
	}

	return (mode & parseInt('0001', 8)) ||
		(mode & parseInt('0010', 8)) && process.getgid && gid === process.getgid() ||
		(mode & parseInt('0100', 8)) && process.getuid && uid === process.getuid();
}

module.exports = function (name) {
	if (typeof name !== 'string') {
		Promise.reject(new TypeError('Expected a string'));
	}

	return pify(fs.stat, Promise)(name).then(function (stats) {
		if (stats && stats.isFile() && isExe(stats.mode, stats.gid, stats.uid)) {
			return true;
		}

		return false;
	});
};

module.exports.sync = function (name) {
	if (typeof name !== 'string') {
		throw new Error('Expected a string');
	}

	var stats = fs.statSync(name);

	if (stats && stats.isFile() && isExe(stats.mode, stats.gid, stats.uid)) {
		return true;
	}

	return false;
};
