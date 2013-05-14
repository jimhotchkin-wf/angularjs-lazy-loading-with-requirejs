module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            dist: {
                src: 'app/scripts/appModule.js',
                dest: 'dist/scripts/appModule.min.js'
            },
            options: {
                banner: '/*! <%= pkg.name %> compiled ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['uglify']);
};