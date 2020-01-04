const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

function css() {
  return gulp
    .src('scss/app.scss')
    .pipe(autoprefixer())
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest("css"));
}

function watchFiles() {
  gulp.watch('scss/*.scss', css);
  gulp.watch('index.html');
}

// tasks to run
gulp.task('css', css); // Run to compile only the css
gulp.task('watch', gulp.parallel(watchFiles)); // Automatic SASS compilation