var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    jade = require('gulp-jade'),
    uglify = require('gulp-uglifyjs');

var path = {
    jade: ['lib/index.jade'],
    html: './',
    stylus: ['lib/app.styl'],
    css: 'statics/css/',
    chicoAssets: 'node_modules/chico/dist/assets/*.*',
    chicoDestAssets: 'statics/assets/',
    chicoDestJs: 'statics/js/'
};

gulp.task('html', function() {
    return gulp.src(path.jade)
        .pipe(jade({
            pretty: false
        }))
        .pipe(gulp.dest(path.html))
});

gulp.task('estilos', function () {
    return gulp.src(path.stylus)
        .pipe(stylus({
            'include css': true,
            compress: true
        }))
        .pipe(gulp.dest(path.css));
});

gulp.task('copy', function() {
    return gulp.src(path.chicoAssets)
        .pipe(gulp.dest(path.chicoDestAssets));
});

gulp.task('uglify', function() {
    gulp.src(['lib/app.js', 'node_modules/chico/dist/**/chico.js'])
        .pipe(uglify())
        .pipe(gulp.dest('statics/js/'))
});