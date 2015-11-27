var gulp = require('gulp'),
  plumber = require('gulp-plumber'), // handle gulp watch errors
  nodemon = require('gulp-nodemon'),
  notify = require('gulp-notify'),
  livereload = require('gulp-livereload'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer');

/* Sass task */
gulp.task('styles', function(){
  gulp.src(['./public/scss/**/*.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

/* Nodemon and livereload task */
gulp.task('reload', function() {
  // listen for changes
  livereload.listen();
  // configure nodemon
  nodemon({
    // the script to run the app
    script: 'bin/www',
    ext: 'js,html,scss'
  }).on('restart', function(){
    // when the app has restarted, run livereload.
    gulp.src('bin/www')
      .pipe(livereload())
      .pipe(notify('Reloading page, please wait...'));
  })
});

/* Default tasks */
gulp.task('default', ['reload'], function(){
  gulp.watch("./public/scss/**/*.scss", ['styles']);
});