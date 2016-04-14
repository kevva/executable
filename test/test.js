import path from 'path';
import test from 'ava';
import fn from '../';

test('test executable and return true', async t => {
	t.true(await fn(path.join(__dirname, 'fixtures/optipng')));
});

test('test executable synchronously and return true', t => {
	t.true(fn.sync(path.join(__dirname, 'fixtures/optipng')));
});

test('test non-executable', async t => {
	t.false(await fn(path.join(__dirname, '../readme.md')));
});
