'use strict';

/**
 * Webpack production build.
 *
 * This task builds minifed javascript using webpack.
 */

var path = require('path');
var gulp = require('gulp');
var webpack = require('webpack');
var defaultConfig = require(path.resolve('webpack.config.js'));
var prodConfig = Object.create(defaultConfig);

prodConfig.plugins = prodConfig.plugins.concat(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
);

gulp.task('webpack', function(callback) {
    webpack(prodConfig, function(err, stats) {
        if(err) {
            console.log(err);
        }
        console.log(stats.toString({
            colors: true
        }));
        callback();
    });
});
