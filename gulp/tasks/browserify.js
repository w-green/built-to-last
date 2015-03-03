var gulp = require('gulp'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  handleErrors = require('../utils/handle-errors'),
  notify = require('gulp-notify'),
  jshint = require("gulp-jshint");

module.exports = function() {
  return browserify('./src/scripts/index.js')
    .bundle()
    .on('error', handleErrors)
    .pipe(source('index.js'))
    .pipe(gulp.dest('./src/dev-output/scripts/'))
    .pipe(notify({ message: 'Browserify task complete' }));
};
