var gulp    = require('gulp'),
    uglify  = require('gulp-uglify'),
    concat  = require('gulp-concat');
var del     = require('del');
var minifyHTML = require('gulp-minify-html');
var minifyCSS  = require('gulp-minify-css');
var ghPages = require('gulp-gh-pages');
var karma   = require('gulp-karma');


gulp.task('minify', function () {           // Tarea para compactar ficheros
  gulp.src('./assets/js/temperatura.js')    // Definición de los ficheros fuente
  .pipe(uglify())                           // 'Afear' los ficheros (compactarlos)
  .pipe(gulp.dest('minified'));             // Directorio destino de los ficheros compactados
  gulp.src('./assets/js/Medida.js')
  .pipe(uglify())                           
  .pipe(gulp.dest('minified')); 
  gulp.src('./assets/js/main.js')
  .pipe(uglify())                           
  .pipe(gulp.dest('minified')); 
  
  gulp.src('index.html')
  .pipe(minifyHTML())                           
  .pipe(gulp.dest('minified')); 
  
  gulp.src('./assets/css/custom.css')
  .pipe(minifyCSS())                           
  .pipe(gulp.dest('minified')); 
  gulp.src('./assets/css/normalize.css')
  .pipe(minifyCSS())                           
  .pipe(gulp.dest('minified')); 
  gulp.src('./assets/css/skeleton.css')
  .pipe(minifyCSS())                           
  .pipe(gulp.dest('minified'));             
});

gulp.task('clean', function(cb) {           // Tarea para limpiar el directorio minified
  del(['minified/*'], cb);
});

gulp.task('deploy', function() {
    return gulp.src('./**/*')
      .pipe(ghPages());
  });
  
  gulp.task('test', function() {
  return gulp.src([])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      throw err;
    });
});

gulp.task('default', function() {
  gulp.src([])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }));
});