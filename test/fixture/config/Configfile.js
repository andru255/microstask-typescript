var basePath = "/usr/local/share";
var config = {
    src:[
        basePath + '/input/modules/*.ts',
        basePath  + '/input/**/*.ts',
        '!' + basePath + '/input/**/**/_**/*.ts',
        '!' + basePath + '/input/_**/*.ts',
        '!' + basePath + '/input/**/_*.ts'
    ],
    build: basePath + "/output/js/",
    options: {
        sortOutput: true
    }
};

module.exports=config;
