'use strict';

import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('dev', ['clean'], function (cb) {

    global.isProd = false;

    runSequence(['views', 'browserify'], 'watch', cb);
});