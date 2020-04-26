'use strict';

const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

require('es6-promise').polyfill();

const browserSync = require('browser-sync').create();

const src_paths = {
  sass: ['sass/_flexbox-grid-mixins.scss'],
  docs_sass: ['docs/sass/*.scss'],
  docs_static: ['docs/*.html', 'docs/**/*.html']
};

const dest_paths = {
  browserSync: 'docs',
  docs_css: 'docs/css/'
};

function lint_sass() {
  return gulp.src(src_paths.sass)
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
  return gulp.src(src_paths.docs_sass)
    .pipe($.plumber({
      errorHandler: function(err) {
        console.log(err.messageFormatted);
        this.emit('end');
      }
    }))
    .pipe($.sass({
      outputStyle: 'expanded'
    }).on( 'error', $.sass.logError ) )
    .pipe($.autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest(dest_paths.docs_css))
    .pipe(browserSync.stream());
}

function browser_sync(done) {
  browserSync.init({
    server: {
      baseDir: dest_paths.browserSync
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

  gulp.watch(src_paths.sass).on('change', gulp.series(lint_sass, docs_sass, browserReload));
  gulp.watch(src_paths.docs_sass).on('change', gulp.series(lint_sass, docs_sass, browserReload));
  gulp.watch(src_paths.docs_static).on('change', browserReload);
}

exports.docs_sass = docs_sass;
exports.lint = lint_sass;
exports.serve = gulp.series(browser_sync, watch_files);
exports.default = gulp.series(lint_sass, docs_sass);
