#!/usr/bin/env node

const { initPrettier } = require('./prettier');
const { initEslint } = require('./eslint');
const { initStylelint } = require('./stylelint');

function run() {
  initPrettier();
  initEslint();
  initStylelint();
}

run();