import path from 'path';
import test from 'ava';
import fn from '../';

test('test executable and return true', async t => {
	t.plan(1);
	const exec = fn(path.join(__dirname, 'fixtures/optipng'));
	t.ok(exec);
});

test('test executable synchronously and return true', t => {
	t.plan(1);
	t.ok(fn.sync(path.join(__dirname, 'fixtures/optipng')));
	t.end();
});

test('test non-executable', async t => {
	t.plan(1);
	const exec = await fn(path.join(__dirname, '../readme.md'));
	t.false(exec);
});
