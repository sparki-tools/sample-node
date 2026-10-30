'use strict';

// A build is a fuse of steps: it lights only if every step lights.

function ignite(steps) {
  if (!Array.isArray(steps)) throw new TypeError('steps must be an array');
  return steps.every((s) => s === 'pass');
}

function slug(name) {
  return String(name)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

module.exports = { ignite, slug };
