const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');

// Paths configuration
const paths = {
  scripts: 'src/**/*.js',
  styles: 'src/**/*.css',
  images: 'src/images/**/*',
  build: 'dist'
};

// Bundle and minify JavaScript files
function bundleJS() {
  return gulp.src(paths.scripts)
    .pipe(sourcemaps.init())
    .pipe(babel()) // Transpile JSX and ES6
    .pipe(concat('bundle.js'))
    .pipe(uglify()) // Minify JavaScript
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.build + '/js'));
}

// Minify CSS files
function minifyCSS() {
  return gulp.src(paths.styles)
    .pipe(cleanCSS()) // Minify CSS
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.build + '/css'));
}

// Optimize images
function optimizeImages() {
  return gulp.src(paths.images)
    .pipe(imagemin()) // Optimize images
    .pipe(gulp.dest(paths.build + '/images'));
}

// Watch files for changes
function watchFiles() {
  gulp.watch(paths.scripts, bundleJS);
  gulp.watch(paths.styles, minifyCSS);
  gulp.watch(paths.images, optimizeImages);
}

// Define tasks
exports.default = gulp.parallel(bundleJS, minifyCSS, optimizeImages, watchFiles);