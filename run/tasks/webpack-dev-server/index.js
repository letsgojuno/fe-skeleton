'use strict';

/**
 * Webpack dev server.
 *
 * Starts a dev server that watches for file changes.
 */

var path = require('path');
var gulp = require('gulp');
var chalk = require('chalk');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var defaultConfig = require(path.resolve('webpack.config.js'));

var devConfig = Object.create(defaultConfig);
devConfig.devtool = 'eval';
devConfig.debug = true;

gulp.task('webpack-dev-server', function(callback) {
    new WebpackDevServer(webpack(devConfig), {
        contentBase: './dist',
        publicPath: devConfig.output.publicPath,
        stats: {
            colors: true
        }
    }).listen(3000, 'localhost', function(err) {
        if (err) {
            console.log(chalk.bgRed.white(err));
        }
        console.log('Listening on port 3000');
    });
});
