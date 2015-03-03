var connect = require('gulp-connect');
    browserSync = require('browser-sync');

module.exports = function(){
  connect.server({
    root: [__dirname + '../../../dist/'],
    port: 8080,
    livereload: false
  });
};