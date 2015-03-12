var gulp = require('gulp');

module.exports = function(){
  gulp.watch('src/scripts/**/*', ['jshint', 'browserify']);
  gulp.watch('src/styles/sass/**', ['sass', 'reload']);
  gulp.watch(['src/templates/**/*.html', 'src/partials/**/*.html'], ['file-include', 'reload']);
  gulp.watch('src/images/**/*.jpg', ['dev-images']);
};