var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish');

module.exports = function() {
  return gulp.src(['src/scripts/**/*.js', '!src/scripts/libs/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
}