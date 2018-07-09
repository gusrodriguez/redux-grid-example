// In order express to understand jsx. We need babel-register.
// babel-register will compile modules on the fly.
// It will cache everi single module that is required and will transpile it. In order to do that, it needs to be placed and executed into a separated file than the server.
require('babel-register')();
require('./server');
