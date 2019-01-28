const gulp = require('gulp')

const sass = require('gulp-sass')

gulp.task('sass', function () {
  return gulp
    .src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
})
const gulp = require('gulp')
const sass = require('gulp-sass')
gulp.task('sass',function(){
  return GULP
  .src('scss/**/*.scss')
  pipe(sass())
  .pipe(gulp.dest('css'))
})
GULP.task('default',function(){
  gulp.watch('scss/**/*.scss',gulp.series('sass'))
})
