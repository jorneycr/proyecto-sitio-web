var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');


 function css(){
     return gulp
        .src('scss/app.scss')
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            outputStyle:'expanded', //nested, compact, compressed
        }))
        .pipe(gulp.dest('css'));
 }

 function watchFiles(){
     gulp.watch('scss/*.scss', css);
    //  gulp.watch('index.html');
 }


 //registrar funciones como tareas
 //parallel carga paralela de archivos
 gulp.task('css', css);
 gulp.task('watch', gulp.parallel(watchFiles));
 