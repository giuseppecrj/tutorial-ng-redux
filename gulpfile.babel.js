import gulp from 'gulp'
import sassJspm from 'sass-jspm-importer'
import plugins from 'gulp-load-plugins'

const $ = plugins()

const inputs = {
  sass: ['./modules/client/main.sass'],
  pug: ['./modules/client/**/*.pug']
}

const outputs = {
  css: './public/client/stylesheets',
  html: './modules/client'
}

gulp.task('styles', () => {
  return gulp.src(inputs.sass)
    .pipe($.sass({
      indentedSyntax: true,
      functions: sassJspm.resolve_function('./'),
      importer: sassJspm.importer
    }))
    .on('error', $.notify.onError())
    .pipe($.rename('main.css'))
    .pipe(gulp.dest(outputs.css))
})

gulp.task('views', () => {
  return gulp.src(inputs.pug)
  .pipe($.pug({
    pretty: true
  }))
  .pipe(gulp.dest(outputs.html))
})

gulp.task('watch', () => {
  gulp.watch(inputs.sass, ['styles'])
  gulp.watch(inputs.pug, ['views'])
})

gulp.task('default', ['watch'])
gulp.task('build', ['styles', 'views', 'default'])
