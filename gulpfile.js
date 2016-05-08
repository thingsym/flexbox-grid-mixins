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
  doc: ['doc/sass/*.scss'],
  gh_pages: [
    'doc/**',
    '!doc/sass', '!doc/sass/**'
  ]
};

var watch_paths = {
  sass: ['sass/_flexbox-grid-mixins.scss'],
  doc: ['doc/sass/*.scss'],
  doc_static: ['doc/*.html', 'doc/**/*.html']
};

var build_paths = {
  doc: []
};

var dest_paths = {
  browserSync: 'doc',
  doc_css: 'doc/css/',
  gh_pages: 'gh_pages'
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

gulp.task('doc', function() {
  return gulp.src(src_paths.doc)
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
    .pipe(gulp.dest(dest_paths.doc_css))
    .pipe(browserSync.stream());
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: dest_paths.browserSync
    }
  });

  gulp.watch(watch_paths.sass, ['default']).on('change', reload);
  gulp.watch(watch_paths.doc, ['doc']).on('change', reload);
  gulp.watch(watch_paths.doc_static).on('change', reload);
});

gulp.task('gh_pages', function() {
	return gulp.src(src_paths.gh_pages)
			.pipe( gulp.dest(dest_paths.gh_pages) );
});

gulp.task('lint', ['lint:sass']);
gulp.task('serve', ['browser-sync']);

gulp.task('default', function(callback) {
  runSequence(
    'lint',
    'doc',
    callback
  );
});

gulp.task('watch', function() {
  gulp.watch(watch_paths.sass, ['default']);
  gulp.watch(watch_paths.doc, ['doc']);
});
