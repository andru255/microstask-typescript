var gulp            = require("gulp");
var config          = require("/usr/local/share/config/Configfile.js");
var sourceMaps      = require("gulp-sourcemaps");
var typescript      = require("gulp-typescript");


gulp.task("default", function(){
    gulp.src(config.src)
        .pipe(typescript(config.options))
        .pipe(gulp.dest(config.build));
});

//gulp.task("build", function(){
//    gulp.src(config.src)
//        .pipe(typescript(config.options.typescript))
//        .pipe(size(config.options.size))
//        .pipe(gulp.dest(config.build));
//});
