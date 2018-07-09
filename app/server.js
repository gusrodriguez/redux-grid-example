
const config = require('./config');
const express = require('express');
const homeController = require('./server/controllers/home.js');

const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const middleware = require('webpack-dev-middleware');

const server = express();
const router = express.Router();

const compiler = webpack(webpackConfig);

// serve static assets from here
// eslint-disable-next-line
server.use('/build', express.static(__dirname + '/build'));

// webpack server side
server.use(middleware(compiler, { serverSideRender: true }));

// routers
router.get('/', homeController);

// mount the router
server.use('/', router);

// start the server
server.listen(config.port);

module.exports = router;

