module.exports = function (grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify:lib'])
    grunt.initConfig({
        uglify: {
            lib: {
                files: {
                    'dest/pulse.min.js': ['src/pulse.js']
                }
            }
        }
    });
};
