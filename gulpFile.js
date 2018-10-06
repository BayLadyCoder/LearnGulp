const gulp = require('gulp');

/*
-- TOP LEVEL FUNCTIONS --
gulp.task - Define tasks
gulp.src - Point to files to use
gulp.dest - Point to the folder output (destination)
gulp.watch - Watch files and folders for change
*/

// Logs Message
gulp.task('message', function () {
    return console.log("Gulp is running...");
});