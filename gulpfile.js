const { series, src, dest } = require('gulp');
const gulpSourcemaps = require('gulp-sourcemaps');
const gulpBabel = require('gulp-babel');
const gulpConcat = require('gulp-concat');
const gulpClean = require('gulp-clean');
const gulpMinify = require('gulp-minify');

function clean(cb) {
  src('dist', {read: false, allowEmpty: true}).pipe(gulpClean());
  cb();
}

function copy(cb) {
  src('src/test/index.html').pipe(dest('dist'));
  cb();
}

function build(cb) {
  src('src/app/loggester.js')
    .pipe(gulpSourcemaps.init())
    .pipe(gulpBabel())
    .pipe(gulpConcat('loggester.js'))
    .pipe(gulpSourcemaps.write('.'))
    .pipe(gulpMinify())
    .pipe(dest('dist'));

  cb();
}

exports.default = series(clean, build, copy);
