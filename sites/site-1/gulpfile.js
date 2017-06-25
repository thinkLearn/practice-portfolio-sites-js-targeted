var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');

gulp.task('css', function() {
	return gulp.src('src/sass/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('dist/css'))
});

gulp.task('scripts', function() {
	return gulp.src('src/js/**/*.js')
		.pipe(uglify())
		.on('error', console.error.bind(console))
		.pipe(gulp.dest('dist/minjs'))
});

gulp.task('copy', function() {
	return gulp.src('src/*.html')
		.pipe(gulp.dest('dist'))
});

gulp.task('watch', ['css', 'scripts'], function() {
	gulp.watch('src/sass/**/*.scss', ['css']);
	gulp.watch('src/*.html', ['copy']);
	gulp.watch('src/js/**/*.js', ['scripts']);
})