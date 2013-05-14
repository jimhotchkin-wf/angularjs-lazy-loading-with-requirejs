module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // uglify: {
        //     dist: {
        //         src: 'app/scripts/appModule.js',
        //         dest: 'dist/scripts/appModule.min.js'
        //     },
        //     options: {
        //         banner: '/*! <%= pkg.name %> compiled ' +
        //                 '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
        //     }
        // },
        compass: {                    // Task
            dev: {                    // Target
              options: {
                sassDir: 'app/sass',
                cssDir: 'app/styles'
              }
            }
        },
        useminPrepare: {
            html: 'app/index.html'
        },
        usemin: {
            html: ['app/index.html']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
     grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.registerTask('build', ['useminPrepare', 'concat', 'uglify', 'usemin']);
    grunt.registerTask('default', ['compass']);
};