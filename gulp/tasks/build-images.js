var gulp = require('gulp');

module.exports = function() {
  gulp.src('src/dev-output/images/**')
    .pipe(gulp.dest('dist/images/'));
};