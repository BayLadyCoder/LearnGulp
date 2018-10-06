const gulp = require('gulp');

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

// set to default, so in Terminal you can just type 'gulp' to run the task
gulp.task('default', function () {
    return console.log('Gulp is running...2');
});