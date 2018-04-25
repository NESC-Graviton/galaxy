import gulp from 'gulp';
import * as rollup from 'rollup';
import del from 'del';
import browserSync from 'browser-sync';
import { devConfig, releaseConfig } from './rollup.config';

const server = browserSync.create();

const paths = {
    src: 'src/*.ts',
    dest: 'dist/'
}

const clean = () => del(['dist']);

function buildFor(env) {
    return () => {
        const rollupConfig = env === 'dev' ? devConfig : releaseConfig;
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
