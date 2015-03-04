var gulp = require('./gulp')([
  'sass',
  'jshint',
  'browserify',
  'watch',
  'server',
  'server-dist',
  'reload',
  'file-include',
  'build-html',
  'build-scripts',
  'build-css'
]);

gulp.task('build', ['sass', 'jshint', 'browserify', 'file-include', 'build-scripts', 'build-html', 'build-css', 'server-dist']);
gulp.task('default', ['file-include', 'sass', 'jshint', 'browserify', 'server', 'watch']);
