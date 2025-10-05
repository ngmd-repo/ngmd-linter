const { existsSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");
const { PROJECT_ROOT } = require("./variables");

function existFileError(filename) {
  throw Error(`❌ The file ${filename} already exist. You need to initialize @ngmd/linter manually. \n\n🚫 Documentation: https://github.com/ngmd-repo/ngmd-linter\n\n`);
}

function checkExistFile(filename) {
  const hasFile = existsSync(join(PROJECT_ROOT, filename));

  if(hasFile) existFileError(filename);
}

function createFile(filename, template) {
  checkExistFile(filename)
  writeFileSync(join(PROJECT_ROOT, filename), template, {encoding: 'utf-8'});
}

module.exports = {
  createFile
}