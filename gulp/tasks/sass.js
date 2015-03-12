var gulp = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  rename = require('gulp-rename'),
  notify = require('gulp-notify');

module.exports = function() {
return gulp.src('src/styles/sass/**/*.scss')
  .pipe(sass({
      outputStyle : 'nested',
      require: ['susy'],
      errLogToConsole: false,
      onError: function(err) {
          return notify().write(err);
      }
  }))
  .pipe(autoprefixer('last 4 versions', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('src/dev-output/styles/css/'));
  // .pipe(notify({ message: 'Styles task complete' }));
}