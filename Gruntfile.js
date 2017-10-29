
var uglifyConf = {
    options: {
      banner: comment
    },
    build: {
      src: 'build/sapien.js',
      dest: 'build/sapien.min.js'
    }
}

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    // Project configuration.
    grunt.initConfig({
            pkg         : grunt.file.readJSON('package.json'),
            webpack     : browserifyConf,
            uglify      : uglifyConf,
            ts          : typescriptConf
        });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //grunt typescript for transpiling typescript into javascript
    grunt.loadNpmTasks('grunt-ts');
    // Default task(s).
    grunt.registerTask('default', ['ts','browserify:dist', 'uglify']);

};