

let comment = '/**\n <%= pkg.name %>:<%= pkg.version %> \n Copyright 2017 <%= pkg.author %> \n Released Under The <%= pkg.license %> License\n <%= pkg.url %> \n */';
const uglifyConf = {
    options: {
      banner: comment
    },
    build: {
      src: 'dist/bundle.js',
      dest: 'dist/bundle.min.js'
    }
}

const webpackConf = {
    dist: require("./webpack.config.js")
}

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    // Project configuration.
    grunt.initConfig({
            pkg         : grunt.file.readJSON('package.json'),
            webpack     : webpackConf,
            uglify      : uglifyConf
        });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt typescript for transpiling typescript into javascript
    grunt.loadNpmTasks('grunt-webpack');
    // Default task(s).
    grunt.registerTask('default', ['webpack', 'uglify']);

};