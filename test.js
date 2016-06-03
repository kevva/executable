import path from 'path';
import test from 'ava';
import m from './';

test('test executable and return true', async t => {
	t.true(await m(path.join(__dirname, 'fixtures/optipng')));
});

test('test executable synchronously and return true', t => {
	t.true(m.sync(path.join(__dirname, 'fixtures/optipng')));
});

test('test non-executable', async t => {
	t.false(await m(path.join(__dirname, 'readme.md')));
});
