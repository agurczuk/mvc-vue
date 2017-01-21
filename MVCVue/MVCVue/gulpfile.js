const gulp = require('gulp');
const gutil = require('gulp-util');
var babel = require('gulp-babel');
var minify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
const fs = require('fs');
const path = require('path');
const browserify = require('browserify');
const watchify = require('watchify');
const fsPath = require('fs-path');

var envify = require('gulp-envify')

var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var es2015 = require('babel-preset-es2015');

var vueify = require('vueify');

function getFolders(dir) {
	return fs.readdirSync(dir)
	.filter(function (file) {
		return fs.statSync(path.join(dir, file)).isDirectory();
	});
}

const paths = [
	process.env.INIT_CWD + '\\ViewModels\\home',
	process.env.INIT_CWD + '\\ViewModels\\home\\components',
	process.env.INIT_CWD + '\\ViewModels\\common\\components',
	process.env.INIT_CWD + '\\Components\\src\\',
];

function watchFolder(input, output) {
	var b = browserify({
		entries: [input],
		cache: {},
		packageCache: {},
		plugin: [watchify],
		basedir: process.env.INIT_CWD,
		paths: paths
	});

	function bundle() {
		b.bundle()
			.pipe(source('bundle.js'))
			.pipe(buffer())
			.pipe(sourcemaps.init({ loadMaps: true }))
			.pipe(babel({ compact: false, presets: ['es2015'] }))
			// Add transformation tasks to the pipeline here.
			//.pipe(minify())
			//  .on('error', gutil.log)
			.pipe(sourcemaps.write('./'))
			.pipe(gulp.dest(output));

		gutil.log("Bundle rebuilt!");
	}
	b.on('update', bundle);
	bundle();
}

function compileVue() {

}

function compileJS(input, output, mode) {
	// set up the browserify instance on a task basis
	var b = browserify({
		debug: true,
		entries: [input],
		basedir: process.env.INIT_CWD,
		paths: paths
	});

	if (mode == 'production') {
		return b.bundle()
		.pipe(source('bundle.js'))
		.pipe(buffer())
			.pipe(babel({ compact: true, presets: ['es2015'] }))
			// Add transformation tasks to the pipeline here.
			.pipe(envify({ NODE_ENV: 'production' }))
			.pipe(minify())
		.pipe(gulp.dest(output));
	}
	else {
		return b.bundle()
			.pipe(source('bundle.js'))
			.pipe(buffer())
			.pipe(sourcemaps.init({ loadMaps: true }))
				.pipe(babel({ compact: true, presets: ['es2015'] }))
				// Add transformation tasks to the pipeline here.
				.pipe(minify())
				.on('error', gutil.log)
			.pipe(gulp.dest(output));
	}
}

const scriptsPath = 'src\\ViewModels';

gulp.task('default', function () {
	var folders = getFolders(scriptsPath);
	gutil.log(folders);
	folders.map(function (folder) {
		watchFolder(scriptsPath + "//" + folder + "//main.js", "Scripts//app//" + folder);
	});
});

gulp.task('singleDevBuild', function () {
	var folders = getFolders(scriptsPath);
	gutil.log(folders);
	folders.map(function (folder) {
		compileJS(scriptsPath + "//" + folder + "//main.js", "Scripts//app//" + folder, 'dev');
	});
});

gulp.task('vueifyFilesOnly', function () {
	gulp.src('src/Components/src/*.vue')
	.pipe(vueify())
	.pipe(gulp.dest('./Components/dist/'))
})

gulp.task('Release', function () {
	var folders = getFolders(scriptsPath);
	gutil.log(folders);
	folders.map(function (folder) {
		compileJS(scriptsPath + "//" + folder + "//main.js", "Scripts//app//" + folder, 'production');
	});
});
