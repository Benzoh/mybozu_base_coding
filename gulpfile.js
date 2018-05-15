var gulp = require('gulp');
var sass = require('gulp-sass');
var header = require('gulp-header');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var browser = require('browser-sync');
var plumber = require('gulp-plumber');

gulp.task('default', function() {
   gulp.src('scss/**/*.scss')
        .pipe(sass())
        .pipe(header('@charset "utf-8";\n\n'))
        .pipe(gulp.dest('css'));
});

// sassコンパイル
gulp.task('sass', function() {
   // something task
   gulp.src('_assets/scss/**/*.scss')
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        })) // なんかエラー吐かない
        .pipe(sass({
            outputStyle: 'expanded' // コード整形
        })).on('error', sass.logError) // エラー終了対策
        .pipe(autoprefixer())
        // .pipe(header('@charset "utf-8";\n\n'))
        .pipe(gulp.dest('_assets/css'))
        .pipe(notify({
            title: 'Sass compieled!!',
            message: new Date()
        }));
});

// ブラウザシンク
// - リロード処理
gulp.task('reload', function() {
    browser.reload()
});

// - 対象設定
gulp.task('sync', function() {
    browser.init({
        proxy: "http://base.mybozu.loc/"
    });
});

// 監視 - 開発時はこれで。
gulp.task('dev', ['sync'], function(){
    gulp.watch('**/*.html', ['reload']); // 階層注意
    gulp.watch('**/*.php', ['reload']); // 階層注意
    gulp.watch('./_assets/scss/**/*.scss', ['reload']);
    gulp.watch('./_assets/scss/**/*.scss', ['sass']);
});