// sudo npm install -g gulp
// npm init
// npm install --save-dev gulp 
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

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

// set to default, so in Terminal you can just type 'gulp' to run the task
gulp.task('default', function () {
    return console.log('Gulp is running...2');
});