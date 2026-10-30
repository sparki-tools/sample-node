# sample-node

A known-good sample for the **Node.js** starter on [Sparki](https://sparki.tools):
**npm ci → npm test on node:20**. Zero dependencies with a committed package-lock.json, and tests on the built-in node --test runner.

## Try it

1. In Sparki, open **Projects → New Project** and add `https://github.com/sparki-tools/sample-node` on branch `main`.
2. On the project, create a pipeline from the **Node.js** starter.
3. Trigger a build. It should go green.

To see a red build, use branch `fail` instead. It has the same code with one assertion
that cannot hold.

## Why it exists

Third-party repositories change under us: a lockfile is dropped, a Node or Go version moves,
a lint hook is added. This repo is owned by Sparki, has no dependencies, and stays inside
the sandbox's limits: non-root user, read-only root filesystem, writable `/workspace` and
`/tmp`, and a 10-minute step timeout. A first build on it shows the platform working, not
someone else's repo.
