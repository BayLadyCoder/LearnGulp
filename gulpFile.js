// sudo npm install -g gulp
// npm init
// npm install --save-dev gulp 
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

/*
-- TOP LEVEL FUNCTIONS --
gulp.task - Define tasks
gulp.src - Point to files to use
gulp.dest - Point to the folder output (destination)
gulp.watch - Watch files and folders for change
*/

// Logs Message. In Terminal, type 'gulp message' to run the task
gulp.task('message', function () {
    return console.log("Gulp is running...");
});


// Copy ALL HTML files, to run this task, type 'gulp copyHtml' in Terminal
gulp.task('copyHtml', function () {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});


// Optimize Images
// npm install --save-dev gulp-imagemin (in Terminal)
gulp.task('imageMin', function () {
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img/'));
});


// Minify Javescript Code
// npm install --save-dev gulp-uglify
// gulp.task('minify', function () {
//     gulp.src('src/js/*')
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });


// Compile Sass
// npm install --save-dev gulp-sass
gulp.task('sass', function () {
    gulp.src('src/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

// Concatination, combine javascript files
// Scripts = concat all js files to main.js and minify it
// npm install --save-dev gulp-concat
gulp.task('scripts', function () {
    gulp.src('src/js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});


// Watch changing of each file
// when something is changed when the file is saved, run this following task
gulp.task('watch', function () {
    gulp.watch('src/js/*.js', ['scripts']);
    gulp.watch('src/img', ['imageMin']);
    gulp.watch('src/sass/*.scss', ['sass']);
    gulp.watch('src/*.html', ['copyHtml']);
});

// set to default, so in Terminal you can just type 'gulp' to run the task
gulp.task('default', ['message', 'copyHtml', 'imageMin', 'sass', 'scripts']);