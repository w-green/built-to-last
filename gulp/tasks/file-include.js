var fileinclude = require('gulp-file-include'),
  gulp = require('gulp');

module.exports = function() {
  gulp.src([__dirname + '../../../src/templates/**.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(__dirname + '../../../src/dev-output/'));
};