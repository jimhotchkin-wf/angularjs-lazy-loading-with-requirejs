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
            html: 'dist/index.html'
        },
        usemin: {
            html: ['dist/index.html']
        },
        copy: {
          main: {
            files: [
                {expand: true, cwd: 'app/', src: '*.html', dest: 'dist/'},
                {expand: true, cwd: 'app/', src: 'scripts/**', dest: 'dist/'},
                {expand: true, cwd: 'app/', src: 'styles/**', dest: 'dist/'},
                {expand: true, cwd: 'app/', src: 'vendor/**', dest: 'dist/'},
                {expand: true, cwd: 'app/', src: 'views/**', dest: 'dist/'}
            ]
          }
        }
        // copy: {
        //   main: {
        //     files: [
        //       {expand: true, cwd: 'dist/', src: ['app/*.*'], dest: 'index.html', filter: 'isFile'}, //copies only files
        //       {expand: true, cwd: 'dist/', src: ['app/scripts/**'], dest: 'scripts/'}, // includes files in path and its subdirs
        //       {expand: true, cwd: 'dist/', src: ['app/styles/**'], dest: 'styles/'}, // includes files in path and its subdirs
        //       {expand: true, cwd: 'dist/', src: ['app/vendor/**'], dest: 'vendor/'}, // includes files in path and its subdirs
        //       {expand: true, cwd: 'dist/', src: ['app/views/**'], dest: 'views/'} // includes files in path and its subdirs
        //       // {expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'}, // makes all src relative to cwd
        //       // {expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'} // flattens results to a single level
        //       // {src: ['css/**', 'img/**', 'js/**', 'release/**', 'lib/**', 'locale/**', '!**/*.less'], dest: 'output/toolkit/'}
        //     ]
        //   }
        // }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.registerTask('build', ['compass', 'copy', 'useminPrepare', 'concat', 'uglify', 'usemin']);
    grunt.registerTask('default', ['compass']);
};