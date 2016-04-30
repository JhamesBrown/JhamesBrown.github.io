var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var harp = require('harp');
var babel = require('gulp-babel');
var cp = require('child_process');

gulp.task('serve', function () {
    harp.server(__dirname + '/src', {
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
        gulp.watch(["src/**/*.scss", "src/**/*.less"], function () {
            reload("*.css", {stream:true});
        });

        gulp.watch(["src/**/*.jade", "src/**/*.ejs","src/**/*.json", "src/**/*.html"], function () {
            reload();
        });

        gulp.watch(["src/**/*.js", "src/**/*.coffee"], function () {
            reload();
        });
    });
});
