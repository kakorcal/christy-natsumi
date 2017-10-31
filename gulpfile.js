require('dotenv').load();
var gulp = require('gulp');
var gss = require('gulp-shopify-sass');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var gulpShopify = require('gulp-shopify-upload');
var merge = require('merge-stream');
var minify = require('gulp-minify');

gulp.task('scss-bundle', function() {
  return gulp.src('./lib/styles/scss/main.scss')
    .pipe(gss())
    .pipe(rename('main.scss.liquid'))
    .pipe(gulp.dest('./assets'));
});

gulp.task('scss-clean', function() {
  return gulp.src('./assets/main.scss.liquid', {read: false})
    .pipe(clean());
});

// bundle scss move to assets folder
gulp.task('scss', ['scss-clean', 'scss-bundle']);

gulp.task('node_modules-copy', function() {
  var minified = [
    "./node_modules/jquery-validation/dist/jquery.validate.min.js",
    "./node_modules/lazysizes/lazysizes.min.js"
  ];
  var unminified = [
    "./node_modules/jquery-validation/dist/additional-methods.js"
  ];
  
  var minifiedStream = gulp.src(minified);
  var unminifiedStream = gulp.src(unminified)
    .pipe(minify({ 
      noSource: true, 
      ext: { min: '.min.js' }
    }));

  return merge(minifiedStream, unminifiedStream)
    .pipe(gulp.dest('./assets'));
});

gulp.task('shopify', function() {
  watch('./lib/styles/scss/**/*.scss', function() {
    gulp.start('scss');
  });

  watch('./+(assets|layout|config|snippets|sections|templates|locales)/**')
    .pipe(gulpShopify(process.env.API_KEY, process.env.PASSWORD, process.env.STORE, process.env.DEV_ID));
});