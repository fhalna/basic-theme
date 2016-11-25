/**
 * Gruntfile.js
 */

module.exports = function (grunt) {

    var requirejs = require("requirejs"),
        mozjpeg = require('imagemin-mozjpeg'),
        currentTheme = "../basic-theme",
        buildPath = "../build/basic-theme/";

    grunt.initConfig({
        removelogging: {
            dist: {
                src: currentTheme + "/script/app/**/*.js"
            }
        },
        requirejs: {
            compile: {
                options: {
                    dir: buildPath,
                    appDir: "./",
                    baseUrl: "./script/",
                    fileExclusionRegExp: /^node_modules$|.git|.idea|.ftppass|.ts$/,
                    optimize: "uglify",
                    paths: {
                        jquery: "lib/jquery/jquery",
                        knockout: "lib/knockout/knockout",
                        TweenMax: "lib/gsap/TweenMax",
                        InstantClick: 'lib/instantClick/instantclick',
                        ObjectFit: 'lib/modernizr/modernizr-object-fit'
                    },
                    modules: [
                        {
                            name: "app/Main"
                        }
                    ]
                }
            }
        },
        imagemin: {                          // Task
            dynamic: {                         // Another target
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'image/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: buildPath + '/image/'                  // Destination path prefix
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: buildPath + '/style/',
                    src: ['screen.css'],
                    dest: buildPath + '/style/',
                    ext: '.css'
                }]
            }
        },
        'ftp-deploy': {
            build: {
                auth: {
                    host: 'ftp.wonderlanddev.com',
                    port: 21,
                    authPath: '.ftppass',
                    authKey: 'key1'
                },
                src: '../../../../../punch-remastered/',
                dest: '/public_html/punch-remastered/'
            }
        }
    });

    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks("grunt-remove-logging");
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.registerTask('release', ['removelogging', 'requirejs', 'imagemin', 'cssmin']);
    grunt.registerTask('build', ['removelogging', 'requirejs', 'cssmin']);
};
