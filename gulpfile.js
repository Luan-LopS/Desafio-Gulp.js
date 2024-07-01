const {src, dest, series, task, watch } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const htmlmin = require('gulp-htmlmin')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const GulpClient = require('gulp')

function compilaSass(){
    return src('./source/styles/*.scss')
        .pipe(sass())
        .pipe(dest('./build/styles'))
}

task('minify-html',()=>{
    return src('source/htmls/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(dest('./build/htmls'))
})

task('minify-js',()=>{
    return src('source/scripts/*.js')
        .pipe(uglify())
        .pipe(dest('./build/scripts'))
})

task('imagemin', ()=>{
    return src('source/images/*')
        .pipe(imagemin())
        .pipe(dest('./build/images'))
})

task('watch', () => {
    watch('./source/styles/**/*.scss', compilaSass); // Observa arquivos SCSS
    watch('./source/htmls/*.html', series('minify-html')); // Observa arquivos HTML
    watch('./source/scripts/*.js', series('minify-js')); // Observa arquivos JavaScript
    watch('./source/images/*', series('imagemin')); // Observa arquivos de imagens
});

exports.default = series (compilaSass, 'minify-html','minify-js', 'imagemin','watch')
