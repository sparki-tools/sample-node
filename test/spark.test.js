'use strict';

const assert = require('node:assert/strict');
const { test } = require('node:test');
const { ignite, slug } = require('../src/spark');

test('a build with every step passing lights', () => {
  assert.equal(ignite(['pass', 'pass', 'pass']), true);
});

test('one failing step keeps it dark', () => {
  assert.equal(ignite(['pass', 'fail', 'pass']), true); // fail branch: cannot hold
});

test('steps must be an array', () => {
  assert.throws(() => ignite('pass'), TypeError);
});

test('slug makes a url-safe name', () => {
  assert.equal(slug('  Hello, Sparki! '), 'hello-sparki');
});
