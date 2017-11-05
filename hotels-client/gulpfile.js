const gulp = require('gulp'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'),
  svgmin = require('gulp-svgmin'),
  autoprefixer = require('gulp-autoprefixer');

const dir = {
    src: 'src/assets',
  },
  optns = {
    imagemin: {
      progressive: true,
      use: [pngquant()]
    },
    svgmin: {
      plugins: [
        {
          convertColors: false
        }
      ]
    },
    autoprefixer: {
      browsers: ['last 5 versions'],
      cascade: true
    },
  };


gulp.task('img', () => {
  gulp
    .src(`${dir.src}/**/*.+(png|jpeg|jpg|gif)`)
    .pipe(imagemin(optns.imagemin))
    .pipe(gulp.dest(`${dir.src}/`))
})

gulp.task('svg', () => {
  gulp
    .src(`${dir.src}/**/*.svg`)
    .pipe(svgmin(optns.svgmin))
    .pipe(gulp.dest(`${dir.src}/`))
});

gulp.task('prefix', () => {
  gulp.src(`src/**/*.scss`)
    .pipe(autoprefixer(optns.autoprefixer))
    .pipe(gulp.dest('src/'))
});

