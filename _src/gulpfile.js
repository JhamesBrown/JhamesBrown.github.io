var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var harp = require('harp');
var babel = require('gulp-babel');
var cp = require('child_process');

gulp.task('serve', function () {
    console.log(__dirname);
    harp.server(__dirname , {
        port: 9000
    }, function () {
        browserSync({
            proxy: "localhost:9000",
            open: false,
            notify: {
                styles: ['opacity: 0', 'position: absolute']
                }
        });
        //watch for scss changes
        gulp.watch(["./**/*.scss", "./**/*.less"], function () {
            reload("*.css", {stream:true});
        });

        gulp.watch(["./**/*.jade", "./**/*.json", "./**/*.html"], function () {
            reload();
        });

        gulp.watch(["./**/*.js", "./**/*.coffee"], function () {
            reload();
        });
        console.log("server endZ");
    });
    console.log("task enszzz");
});
