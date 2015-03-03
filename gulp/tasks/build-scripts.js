var gulp = require('gulp'),
  streamify = require('gulp-streamify'),
  uglify = require('gulp-uglify');

module.exports = function() {
  gulp.src('src/dev-output/scripts/index.js')
    .pipe(streamify(uglify()))
    .pipe(gulp.dest('dist/scripts/'));
};