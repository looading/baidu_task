var gulp = require('gulp');
var browserify = require('browser-sync').create();
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var jshint = require('gulp-jshint');
var clean = require('gulp-clean');
var config = require('./gulp/config.js');

var reload = browserify.reload;


// create local server
gulp.task('server', function() {
	browserify.init({
		// 创建本地服务器
		server : {
			baseDir : 'www'
		},
		// 代理 可与mamp xampp wamp 等配合使用
		// proxy : 'localhost:80',
		port : 4000
	});
});


// sass compile
gulp.task('sass', function() {
	return gulp.src(config.sass.src)
		.pipe(sass().on('error', function(e) {
			console.log('sass error: ' + e);
		}))
		.pipe(gulp.dest(config.sass.dest));
});

// uglify js
gulp.task('uglify', function() {
	return gulp.src(config.js.src)
		// .pipe(uglify().on('error', function(e) {
		// 	console.log('uglify js error : ' + e);
		// }))
		.pipe(gulp.dest(config.js.dest));
});

// jshint
gulp.task('jshint', function() {
	return gulp.src(config.js.src)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// imagemin
gulp.task('imagemin', function() {
	return gulp.src(config.img.src)
		.pipe(imagemin().on('error', function(e) {
			console.log('imagemin error : ' + e);
		}))
		.pipe(gulp.dest(config.img.dest));
});

// listen file
gulp.task('watch', function() {

	// listen sass
	gulp.watch(config.sass.src, ['sass']).on('change', reload);

	// listen js
	gulp.watch(config.js.src, ['uglify']).on('change', reload);

	// listen img
	gulp.watch(config.img.src, ['imagemin']).on('change', reload);

	// listen html 
	gulp.watch(config.html.src).on('change', reload);

});

// file clean
gulp.task('clean', function(){
	return gulp.src('www/js/*.js')
		.pipe(clean({force:true}));
});

// develop 
gulp.task('default', ['server', 'watch']);

