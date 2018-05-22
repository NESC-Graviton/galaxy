import gulp from 'gulp';
import * as rollup from 'rollup';
import del from 'del';
import browserSync from 'browser-sync';
import { devConfig, releaseConfig, importCodeConfig } from './rollup.config';

const server = browserSync.create();

const paths = {
    src: 'src/**/*.ts',
    dest: 'dist/'
}

const clean = () => del(['dist']);

function buildFor(target) {
    return () => {
        let rollupConfig;
        switch (target) {
            case 'dev': rollupConfig = devConfig; break;
            case 'release': rollupConfig = releaseConfig; break;
            case 'import_code': rollupConfig = importCodeConfig; break;
            default: rollupConfig = releaseConfig;
        }
        return rollup.rollup({
            input: rollupConfig.input,
            plugins: rollupConfig.plugins
        }).then(bundle => {
            return bundle.write(rollupConfig.output);
        })
    };
}

function serve(done) {
    server.init({
        server: {
            baseDir: ['./example', './dist']
        }
    });
    done();
};

function reload(done) {
    server.reload();
    done();
};


const watch = () => gulp.watch(paths.src, gulp.series(buildFor('dev'), reload));

gulp.task('dev', gulp.series(
    clean,
    buildFor('dev'),
    serve,
    watch
));

gulp.task('release', gulp.series(
    clean,
    buildFor('release')
));

gulp.task('import_code', gulp.series(
    buildFor('import_code')
));
