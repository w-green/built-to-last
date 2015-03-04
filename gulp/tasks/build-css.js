var gulp = require('gulp'),
  minifycss = require('gulp-minify-css');

module.exports = function() {
  gulp.src('src/dev-output/styles/css/main.min.css')
    .pipe(minifycss())
    .pipe(gulp.dest('dist/styles/css/'));
};