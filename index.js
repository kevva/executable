'use strict';
const fs = require('fs');
const pify = require('pify');

const isExe = (mode, gid, uid) => {
	if (process.platform === 'win32') {
		return true;
	}

	const isGroup = gid ? process.getgid && gid === process.getgid() : true;
	const isUser = uid ? process.getuid && uid === process.getuid() : true;

	return Boolean((mode & parseInt('0001', 8)) ||
		((mode & parseInt('0010', 8)) && isGroup) ||
		((mode & parseInt('0100', 8)) && isUser));
};

module.exports = name => {
	if (typeof name !== 'string') {
		Promise.reject(new TypeError('Expected a string'));
	}

	return pify(fs.stat)(name).then(stats => stats && stats.isFile() && isExe(stats.mode, stats.gid, stats.uid));
};

module.exports.sync = name => {
	if (typeof name !== 'string') {
		throw new Error('Expected a string');
	}

	const stats = fs.statSync(name);

	return stats && stats.isFile() && isExe(stats.mode, stats.gid, stats.uid);
};

module.exports.checkMode = isExe;
