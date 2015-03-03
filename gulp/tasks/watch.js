var gulp = require('gulp');

module.exports = function(){
  gulp.watch('src/scripts/**/*', ['jshint', 'browserify', 'dev-move-scripts']);
  gulp.watch('src/styles/sass/**', ['sass']);
  gulp.watch(['src/templates/**/*.html', 'src/partials/**/*.html'], ['file-include', 'reload']);
};