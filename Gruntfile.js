module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            build: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/responcss.css': 'scss/responcss/responcss.scss'
                }
            }
        },
        watch: {
            files: 'scss/**/*.scss',
            tasks: [
                'sass:build'
            ]
        },
        jshint: {
            all: [
                'js/**/*.js'
            ],
            options: {
                node: true,
                browser: true,
                curly: true,
                devel: false,
                eqeqeq: true,
                eqnull: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                globals: {
                    define: false
                },
                strict: false
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', [
        'watch'
    ]);

    grunt.registerTask('release', [
        'sass:build',
        'jshint'
    ]);
};