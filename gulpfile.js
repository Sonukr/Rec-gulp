var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');

// create a task for compiling scss to css
gulp.task('sass', ['copy'], function () {
   gulp.src('./src/scss/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./src/css/'));
});

// create a task to watch the scss changes
gulp.task('watch', function () {
  gulp.watch('./src/scss/*.scss', ['sass', 'clean']);
});


gulp.task('clean', function() {
  // You can use multiple globbing patterns as you would with `gulp.src`
   del(['./src/main.css']);
});

// copy task
gulp.task('copy', function () {
    gulp.src('./src/css/main.css')
        .pipe(gulp.dest('./src/'));
});

//call the default task in which call above task as dependency
gulp.task('default', ['sass', 'watch']);
