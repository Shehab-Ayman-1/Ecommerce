// npm install gulp
// [All] npm i gulp-concat sass gulp-sass gulp-autoprefixer gulp-pug gulp-uglify gulp-minify
// Note: The Defferant Between Minify & Uglify Pluggins That
//       Minify => Create 2 Files The First Is Minified And The Second Is Not Minified
//       Uglify => Create 1 File Is Minified

const { src, dest, series, watch } = require("gulp");
const AutoPrefixer = require("gulp-autoprefixer");
const Sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const pug = require("gulp-pug");
const uglify = require("gulp-uglify");

function html() {
	return src("./Project/pug/pages/*.pug").pipe(pug()).pipe(dest("./dist/html/"));
}

function sass() {
	return (
		src("./Project/sass/**/*.scss")
			// Note: Compressed Output & Log The Error => Make The Comliper Take More Second In Compile
			.pipe(Sass({ outputStyle: "compressed" }).on("error", Sass.logError))
			.pipe(AutoPrefixer("last 2 versions"))
			.pipe(concat("style.css"))
			.pipe(dest("./dist/css/"))
	);
}

function js() {
	return src("./Project/js/**/*.js").pipe(uglify()).pipe(dest("./dist/js/"));
}

function json() {
	return src("./Project/js/API/*.json").pipe(dest("./dist/js/API/"));
}

function Watch() {
	watch("./Project/pug/**/*.pug", html);
	watch("./Project/sass/**/*.scss", sass);
	watch("./Project/js/**/*.js", js);
	watch("./Project/js/API/*.json", json);
}

exports.default = series(html, sass, js, json, Watch);
