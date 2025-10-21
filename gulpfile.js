/**
 * GULPFILE.JS - Configuração do Gulp
 * Demonstração para trabalho acadêmico
 */

const gulp = require("gulp");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const cleanCSS = require("gulp-clean-css");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");
const htmlmin = require("gulp-htmlmin");
const del = require("del");
const browserSync = require("browser-sync").create();

// Caminhos dos arquivos
const paths = {
  html: {
    src: "src/**/*.html",
    dest: "dist/",
  },
  styles: {
    src: "src/scss/**/*.scss",
    dest: "dist/css/",
  },
  scripts: {
    src: "src/js/**/*.js",
    dest: "dist/js/",
  },
  images: {
    src: "src/images/**/*",
    dest: "dist/images/",
  },
};

/**
 * Tarefa 1: Limpar a pasta dist
 * Remove todos os arquivos gerados anteriormente
 */
function clean() {
  return del(["dist"]);
}

/**
 * Tarefa 2: Processar HTML
 * - Minifica arquivos HTML
 * - Remove espaços e comentários
 */
function html() {
  return gulp
    .src(paths.html.src)
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      })
    )
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
}

/**
 * Tarefa 3: Compilar SCSS para CSS
 * - Compila SCSS
 * - Minifica CSS
 * - Renomeia arquivo
 */
function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

/**
 * Tarefa 4: Processar JavaScript
 * - Concatena múltiplos arquivos JS
 * - Minifica o código
 * - Gera arquivo bundle
 */
function scripts() {
  return gulp
    .src(paths.scripts.src)
    .pipe(concat("app.js"))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
}

/**
 * Tarefa 5: Otimizar Imagens
 * - Comprime imagens PNG, JPG, GIF, SVG
 */
function images() {
  return gulp
    .src(paths.images.src)
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(gulp.dest(paths.images.dest));
}

/**
 * Tarefa 6: Servidor de Desenvolvimento
 * - Inicia servidor local
 * - Recarrega navegador automaticamente
 */
function serve(done) {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
    port: 3000,
  });
  done();
}

/**
 * Tarefa 7: Monitorar mudanças
 * - Observa alterações nos arquivos
 * - Executa tarefas automaticamente
 */
function watchFiles() {
  gulp.watch(paths.html.src, html);
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.images.src, images);
}

/**
 * TAREFAS COMPOSTAS
 */

// Tarefa de build completo
const build = gulp.series(clean, gulp.parallel(html, styles, scripts, images));

// Tarefa de desenvolvimento (watch + server)
const watch = gulp.series(build, gulp.parallel(serve, watchFiles));

/**
 * EXPORTAR TAREFAS
 */
exports.clean = clean;
exports.html = html;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.build = build;
exports.watch = watch;
exports.default = watch;
