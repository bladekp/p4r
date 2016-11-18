/**
 * Created by bladekp on 29.04.16.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var jsFiles = [
        'bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-route/angular-route.js',
        'node_modules/jquery/dist/jquery.js',
        'node_modules/jquery.cookie/jquery.cookie.js',
        'node_modules/jquery-ui/jquery-ui.js',
        'app/components/version/version.js',
        'app/components/version/version-directive.js',
        'app/components/version/interpolate-filter.js',
        'app/content/utils/main.js',
        'app/content/app.js',
        'app/content/**/*Config.js',
        'app/content/**/*Controller.js',
        'app/content/**/*Directives.js',
        'app/content/**/*Service.js',
        'app/content/**/*Factory.js'
    ];

gulp.task('build', function() {
    return gulp.src(jsFiles)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('app/dist/'));

});

// define the default task and add the watch task to it
gulp.task('default', ['watch']);

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
    gulp.watch(jsFiles, ['build']);
});
