const gulp = require('gulp');
// const sass = require('gulp-sass') //sass-> css
const sass = require('gulp-sass')(require('sass'));
const minifyCSS = require('gulp-minify-css'); //压缩css

gulp.task('sass', async function() {  //打包报错Task never defined: scss - did you mean? sass  未处理
  return gulp.src('components/css/**/*.scss')
    .pipe(sass()) //scss -> css
    .pipe(minifyCSS()) //压缩css
    .pipe(gulp.dest('dist/css'))//输出到打包目录
})