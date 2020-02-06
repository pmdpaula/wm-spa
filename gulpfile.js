const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')


gulp.task('default', () => {
  if (util.env.production ) {
    sequence('deps', 'app')     //! O gulp.start chama as task indicadas assim como a sequence. Na sequence é garantido chamar cada task em sequencia.
    // gulp.start('deps', 'app')      // Nas versões novas do gulp o .start tb fará desta forma.
  }
  else {
    sequence('deps', 'app', 'servidor')
    // gulp.start('deps', 'app', 'servidor')
  }
})


