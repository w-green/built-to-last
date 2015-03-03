var connect = require('gulp-connect');
  browserSync = require('browser-sync');

module.exports = function(){
  browserSync({
    server: {
        baseDir: __dirname + '../../../src/dev-output/'
    }
  });
};