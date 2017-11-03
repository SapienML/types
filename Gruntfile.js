const tsc =  {
    default :{
        src : ["./src/**/*ts"],
        outDir : "dist",},
    options : {
        rootDir : "./src",
        declaration : true,
        sourceMap : false
    }
}

module.exports = function(grunt) {
    require("load-grunt-tasks")(grunt);
    // Project configuration.
    grunt.initConfig({
            pkg         : grunt.file.readJSON("package.json"),
            ts : tsc
        });

    grunt.loadNpmTasks("grunt-ts")
    // Default task(s).
    grunt.registerTask("default", ["ts"]);

};