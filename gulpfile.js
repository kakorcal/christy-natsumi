var gulp = require('gulp');
var gss = require('gulp-shopify-sass');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
// var sass = require('gulp-sass');
// var sassGlob = require('gulp-sass-glob');
// var watch = require('gulp-watch');

// bundle scss and js files into one file and move to assets folder

// gulp.task('scss-bundle', function() {
//   return gulp.src('lib/styles/scss/main.scss')
//     .pipe(sassGlob())
//     .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//     .pipe(rename('main.scss.liquid'))
//     .pipe(gulp.dest('assets'));
// });

gulp.task('scss-bundle', function() {
  return gulp.src('lib/styles/scss/main.scss')
    .pipe(gss())
    .pipe(rename('main.scss.liquid'))
    .pipe(gulp.dest('assets'));
});

gulp.task('scss-clean', function() {
  return gulp.src('assets/main.scss.liquid', {read: false})
    .pipe(clean());
});

gulp.task('scss', ['scss-clean', 'scss-bundle']);