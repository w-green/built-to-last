var gulp = require('gulp');

module.exports = function() {
  gulp.src('src/dev-output/styles/css/**.css')
    .pipe(gulp.dest('dist/styles/css/'));
};