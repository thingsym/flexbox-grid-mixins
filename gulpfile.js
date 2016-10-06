'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var scsslint = require('gulp-scss-lint');
require('es6-promise').polyfill();

var runSequence = require('run-sequence');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var src_paths = {
  sass: ['sass/_flexbox-grid-mixins.scss'],
  docs_sass: ['docs/sass/*.scss'],
  docs_static: ['docs/*.html', 'docs/**/*.html']
};

var dest_paths = {
  browserSync: 'docs',
  docs_css: 'docs/css/'
};

gulp.task('lint:sass', function() {
  return gulp.src(src_paths.sass)
    .pipe($.plumber({
      errorHandler: function(err) {
        console.log(err.messageFormatted);
        this.emit('end');
      }
    }))
    .pipe(scsslint({
        'reporterOutputFormat': 'Checkstyle',
        'bundleExec': true,
        'config': 'scss-lint.yml'
    }))
    .pipe(scsslint.failReporter());
});

gulp.task('docs_sass', function() {
  return gulp.src(src_paths.docs_sass)
    .pipe($.plumber({
      errorHandler: function(err) {
        console.log(err.messageFormatted);
        this.emit('end');
      }
    }))
    .pipe($.sass( { outputStyle: 'expanded' } ).on( 'error', $.sass.logError ) )
    .pipe($.autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest(dest_paths.docs_css))
    .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: dest_paths.browserSync
    }
  });

  gulp.watch(src_paths.sass, ['default']).on('change', reload);
  gulp.watch(src_paths.docs_sass, ['docs_sass']);
  gulp.watch(src_paths.docs_static).on('change', reload);
});

gulp.task('lint', ['lint:sass']);
gulp.task('serve', ['browser-sync']);

gulp.task('default', function(callback) {
  runSequence(
    'lint',
    'docs_sass',
    callback
  );
});

gulp.task('watch', function() {
  gulp.watch(src_paths.sass, ['default']);
  gulp.watch(src_paths.docs_sass, ['docs_sass']);
});
