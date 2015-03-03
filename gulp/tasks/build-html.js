var gulp = require('gulp');

module.exports = function() {
  gulp.src('src/dev-output/**.html')
    .pipe(gulp.dest('dist/'));
};