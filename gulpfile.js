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
  'build-scripts'
]);

gulp.task('build', ['sass', 'jshint', 'browserify', 'file-include', 'build-scripts', 'build-html', 'server-dist']);
gulp.task('default', ['file-include', 'browserify', 'server', 'watch']);
