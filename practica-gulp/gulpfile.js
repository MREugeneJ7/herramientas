var gulp = require("gulp");
var concatCss = require("gulp-concat-css");
var minifyCss = require("gulp-minify-css");
var sourcemaps = require("gulp-sourcemaps");
var browserSync = require("browser-sync").create();
var jsmin = require('gulp-jsmin');
const imagemin = require('gulp-imagemin');

gulp.task("initial-structure", function () {
  return gulp
    .src("*.*", { read: false })
    .pipe(gulp.dest("./src/css"))
    .pipe(gulp.dest("./src/img"))
    .pipe(gulp.dest("./src/sass"))
    .pipe(gulp.dest("./src/js"));
});

gulp.task("concat-css", function () {
  return gulp
    .src("./src/css/*.css")
    .pipe(concatCss("super.css"))
    .pipe(gulp.dest("dist"));
});

gulp.task("minify-css", function () {
  return gulp.src("./src/css/*.css").pipe(minifyCss()).pipe(gulp.dest("dist"));
});

gulp.task("concat-and-minify-css", function () {
  return gulp
    .src("./src/css/*.css")
    .pipe(sourcemaps.init())
    .pipe(concatCss("super.css"))
    .pipe(minifyCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
});

gulp.task("default", function () {
  browserSync.init({
    server: "./src",
  });
  gulp.watch("*.html", browserSync.reload);
});


gulp.task('minify-js', function () {
    return gulp.src('src/**/*.js')
        .pipe(jsmin())
        .pipe(gulp.dest('dist'));
});


gulp.task('minify-img', function () {
    return gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});