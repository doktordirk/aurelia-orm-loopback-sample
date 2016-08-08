var path = require('path');
var serverBaseDir = path.normalize('./../server');
var appRoot = 'src/';
var outputRoot = 'dist/';
var exportSrvRoot = 'export/';
var nodeStartupScript = 'server.js';

// hide warning //
var emitter = require('events');
emitter.defaultMaxListeners = 8;


module.exports = {
  root: appRoot,
  source: appRoot + '**/*.ts',
  html: appRoot + '**/*.html',
  css: appRoot + '**/*.css',
  style: 'styles/**/*.css',
  output: outputRoot,
  exportSrv: exportSrvRoot,
  doc: './doc',
  e2eSpecsSrc: 'test/e2e/src/**/*.ts',
  e2eSpecsDist: 'test/e2e/dist/',
  dtsSrc: [
    './typings/**/*.d.ts',
    './custom_typings/**/*.d.ts'
  ],
  nodeJsPort: 3000,
  webServerPort: 9000,
  serverBaseDir: serverBaseDir,
  nodeStartUpScriptPath: path.join( serverBaseDir,  nodeStartupScript)
}
