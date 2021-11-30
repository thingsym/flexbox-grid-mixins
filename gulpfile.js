'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

var Fiber = require('fibers');

var sass = require('gulp-sass')(require('node-sass'));
var dart_sass = require('gulp-sass')(require('sass'));

require('es6-promise').polyfill();

const browserSync = require('browser-sync').create();
const browserSync_baseDir = 'docs';

const entry_paths = {
  sass: ['sass/_flexbox-grid-mixins.scss'],
  docs_sass: ['docs/sass/*.scss'],
  dart_sass: ['dart-sass/_flexbox-grid-mixins.scss'],
  docs_dart_sass: ['docs/dart-sass/*.scss'],
};

const dest_paths = {
  docs_css: 'docs/css/',
  docs_css_dart_sass: 'docs/css-dart-sass/'
};

const watch_paths = {
  sass: ['sass/_flexbox-grid-mixins.scss'],
  docs_sass: ['docs/sass/*.scss', 'docs/sass/**/*.scss'],
  dart_sass: ['dart-sass/_flexbox-grid-mixins.scss'],
  docs_dart_sass: ['docs/dart-sass/*.scss', 'docs/dart-sass/**/*.scss'],
  docs_static: ['docs/*.html', 'docs/**/*.html']
};

function lint_sass() {
  return gulp.src(entry_paths.sass, entry_paths.dart_sass)
    .pipe($.plumber({
      errorHandler: function(err) {
        console.log(err.messageFormatted);
        this.emit('end');
      }
    }))
    .pipe($.stylelint({
      config: {
        extends: [
          "stylelint-config-recommended",
          "stylelint-scss",
          "stylelint-config-recommended-scss"
        ],
        rules: {
          "block-no-empty": null,
          "no-descending-specificity": null
        }
      },
      reporters: [{
        formatter: 'string',
        console: true
      }]
    }));
};

function docs_sass() {
  return gulp.src(entry_paths.docs_sass)
    .pipe($.plumber({
      errorHandler: function(err) {
        console.log(err.messageFormatted);
        this.emit('end');
      }
    }))
    .pipe(sass({
      fiber: Fiber,
      outputStyle: 'expanded'
    }).on( 'error', sass.logError ) )
    .pipe($.autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest(dest_paths.docs_css))
    .pipe(browserSync.stream());
}

function docs_dart_sass() {
  return gulp.src(entry_paths.docs_dart_sass)
    .pipe($.plumber({
      errorHandler: function(err) {
        console.log(err.messageFormatted);
        this.emit('end');
      }
    }))
    .pipe(dart_sass({
      fiber: Fiber,
      outputStyle: 'expanded'
    }).on( 'error', dart_sass.logError ) )
    .pipe($.autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest(dest_paths.docs_css_dart_sass))
    .pipe(browserSync.stream());
}

function browser_sync(done) {
  browserSync.init({
    server: {
      baseDir: browserSync_baseDir
    },
    reloadOnRestart: true
  });
  done();
}

function watch_files(done) {
  const browserReload = () => {
    browserSync.reload();
    done();
  };

  gulp.watch(watch_paths.sass, { usePolling: true }).on('change', gulp.series(lint_sass, docs_sass, browserReload));
  gulp.watch(watch_paths.docs_sass, { usePolling: true }).on('change', gulp.series(lint_sass, docs_sass, browserReload));
  gulp.watch(watch_paths.dart_sass, { usePolling: true }).on('change', gulp.series(lint_sass, docs_dart_sass, browserReload));
  gulp.watch(watch_paths.docs_dart_sass, { usePolling: true }).on('change', gulp.series(lint_sass, docs_dart_sass, browserReload));
  gulp.watch(watch_paths.docs_static, { usePolling: true }).on('change', browserReload);
}

exports.docs_sass = docs_sass;
exports.docs_dart_sass = docs_dart_sass;
exports.lint = lint_sass;
exports.serve = gulp.series(browser_sync, watch_files);
exports.default = gulp.series(lint_sass, docs_sass, docs_dart_sass);
