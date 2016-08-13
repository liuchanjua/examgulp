var gulp		= require('gulp');
var sass    = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps'); 
var reload      = browserSync.reload;
//编译sass
gulp.task('sass',function(){
    return gulp.src('css/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .on('error',function(err){
            console.log(err.message);
        })
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))      
        .pipe(reload({stream:true}))
        .pipe(sass());
});
//自动刷
gulp.task('default',['sass'], function() {    
  var files = [
    '**/*.html',
    'css/*.scss',
    'js/*.js',
    'lcj_list.html'
  ];
  browserSync.init(files,{
    server: {
      baseDir:'./',
      browser:"google chrome"
    },
    startPath:'/lcj_list.html'
  });
  gulp.watch('css/*.scss',['sass'])
  gulp.watch('css/main.scss',['sass'])
});





















