// npm install gulp
// [All] npm i gulp-concat sass gulp-sass gulp-autoprefixer gulp-pug gulp-uglify gulp-minify

// Note: The Defferant Between Minify & Uglify Pluggins That
//       Minify => Create 2 Files The First Is Minified And The Second Is Not Minified
//       Uglify => Create 1 File Is Minified
const { src, dest, series, watch } = require("gulp");
const AutoPrefixer = require("gulp-autoprefixer");
const Sass = require("gulp-sass")(require("sass"));
const Concat = require("gulp-concat");
const GulpPug = require("gulp-pug");
const uglify = require("gulp-uglify");
const minify = require("gulp-minify");

function html() {
	return src("./Project/pug/pages/*.pug").pipe(GulpPug()).pipe(dest("./dist/html/"));
}

function cssLibs() {
	return src("./Project/sass/libs/*.css").pipe(dest("./dist/css/libs/"));
}

function sass() {
	return src("./Project/sass/**/*.scss")
		.pipe(Sass({ outputStyle: "compressed" }).on("error", Sass.logError))
		.pipe(AutoPrefixer("last 2 versions"))
		.pipe(Concat("style.css"))
		.pipe(dest("./dist/css/"));
}

function js() {
	return src("./Project/js/**/*.js").pipe(uglify()).pipe(dest("./dist/js/"));
}

function images() {
	return src("./Project/images/*.*").pipe(dest("./dist/images/"));
}

function json() {
	return src("./Project/js/API/*.json").pipe(dest("./dist/js/API/"));
}

function Watch() {
	watch("./Project/pug/**/*.pug", html);
	watch("./Project/sass/libs/*.css", cssLibs);
	watch("./Project/sass/**/*.scss", sass);
	watch("./Project/js/**/*.js", js);
	watch("./Project/images/*.*", images);
	watch("./Project/js/API/*.json", json);
}

exports.default = series(html, cssLibs, sass, js, images, json, Watch);
