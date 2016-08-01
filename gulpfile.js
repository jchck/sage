// Gulp tasks for v2v
/*
  require node version >= 6.0.0
  to check use $ node -v
  $ brew unlink node012
  $ brew link node
*/

var devUrl            =   'http://192.168.33.10';

// Load plugins
var autoprefixer      =   require('autoprefixer');
var browserSync       =   require('browser-sync').create();
var browserReload     =   browserSync.reload;
var mqpacker          =   require('css-mqpacker');
var cssnano           =   require('cssnano');
var gulp              =   require('gulp');
var concat            =   require('gulp-concat');
var imagemin          =   require('gulp-imagemin');
var postcss           =   require('gulp-postcss');
var size              =   require('gulp-size');
var uglify            =   require('gulp-uglify');
var uncss             =   require('gulp-uncss');
var watch             =   require('gulp-watch');
var calc              =   require('postcss-calc');
var color             =   require('postcss-color-function');
var media             =   require('postcss-custom-media');
var properties        =   require('postcss-custom-properties');
var comments          =   require('postcss-discard-comments');
var atImport          =   require('postcss-import');

// postcss plugin registry
var postcssPlugins    =   [
    atImport,
    media,
    properties,
    calc,
    color,
    comments,
    autoprefixer,
    cssnano,
    mqpacker
];

// css processing task
gulp.task('css', function() {
  gulp.src('./assets/styles/main.css')
   
   .pipe(postcss(postcssPlugins))

   .pipe(size({gzip: true, showFiles: true, title: 'Processed & gZipped!'}))

   .pipe(gulp.dest('./dist/styles'))

   .pipe(browserSync.stream());
});

// js processing task
gulp.task('js', function() {
  gulp.src([
    './src/js/main.js'
  ])
  .pipe(concat('all.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./dest/js'))
});

// image processing task
gulp.task('pics', function(){
  gulp.src('./src/img/**.*')
    .pipe(imagemin({
        verbose: true
    }))
    .pipe(gulp.dest('./dest/img/'));
});

// Initialize browser-sync which starts a static server also allows for
// browsers to reload on filesave
gulp.task('watch', function() {
    browserSync.init({

        // Be sure you start your dev server at the root of your Grav install
        proxy: devUrl,

        // Template files to watch 
        files: [
          '*.html',
          'src/js/main.js'
        ]
    });

    // CSS files to watch
    gulp.watch(['./src/css/**.css'], ['css']);
});

/**
 *
 * Default task
 *
 */
gulp.task('default', ['css', 'watch'], function(){
  gulp.start('css', 'pics');
  gulp.watch('src/css/**.css', ['css']);
  gulp.watch('src/img/**.*', ['pics']);
  gulp.watch('*.html', browserReload);
});