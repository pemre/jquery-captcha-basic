var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('js', function () {
    return gulp.src(['src/jquery.captcha.basic.js'])
        .pipe(uglify())
        .pipe(concat('jquery.captcha.basic.min.js'))
        .pipe(gulp.dest('src'))
});

gulp.task('default', [
    'js'
]);
