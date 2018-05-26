const rollup = require('rollup');
const { devConfig, importCodeConfig, releaseConfig } = require('./rollup.config');
const browserSync = require('browser-sync');
const gulp = require('gulp');
const shelljs = require('shelljs');

const server = browserSync.create();
const paths = {
    src: 'src/**/*.ts',
    dest: 'dist/'
};

const clean = done => {
    shelljs.rm('-rf', 'dist');
    done();
};

function buildFor(target) {
    return () => {
        let rollupConfig;
        switch (target) {
            case 'dev':
                rollupConfig = devConfig;
                break;
            case 'release':
                rollupConfig = releaseConfig;
                break;
            case 'import_code':
                rollupConfig = importCodeConfig;
                break;
            default:
                rollupConfig = releaseConfig;
        }
        return rollup
            .rollup({
                input: rollupConfig.input,
                plugins: rollupConfig.plugins
            })
            .then(bundle => {
                return bundle.write(rollupConfig.output);
            });
    };
}

function serve(done) {
    server.init({
        server: {
            baseDir: ['./examples', './dist']
        }
    });
    done();
}

function reload(done) {
    server.reload();
    done();
}

const watch = () => gulp.watch(paths.src, gulp.series(buildFor('dev'), reload));

gulp.task('dev', gulp.series(clean, buildFor('dev'), serve, watch));

gulp.task('release', gulp.series(clean, buildFor('release')));

gulp.task('import_code', gulp.series(buildFor('import_code')));
