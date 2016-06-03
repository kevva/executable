'use strict';
const fs = require('fs');
const pify = require('pify');

const isExe = (mode, gid, uid) => {
	if (process.platform === 'win32') {
		return true;
	}

	return (mode & parseInt('0001', 8)) ||
		(mode & parseInt('0010', 8)) && process.getgid && gid === process.getgid() ||
		(mode & parseInt('0100', 8)) && process.getuid && uid === process.getuid();
};

module.exports = name => {
	if (typeof name !== 'string') {
		Promise.reject(new TypeError('Expected a string'));
	}

	return pify(fs.stat)(name).then(stats => {
		if (stats && stats.isFile() && isExe(stats.mode, stats.gid, stats.uid)) {
			return true;
		}

		return false;
	});
};

module.exports.sync = name => {
	if (typeof name !== 'string') {
		throw new Error('Expected a string');
	}

	const stats = fs.statSync(name);

	if (stats && stats.isFile() && isExe(stats.mode, stats.gid, stats.uid)) {
		return true;
	}

	return false;
};
