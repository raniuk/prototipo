// Generated on 2015-08-13 using generator-angular 0.12.1
//'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    pkg: grunt.file.readJSON('package.json'),

    //copy: {
      //main: {
        //expand: true,
        //cwd: 'src/',
        //src: ["**", "!styles/**/*.styl"],
        //dest: 'dist/'
      //}
    //},
    stylus: {
      compile: {
        options: {
          paths: ['styles/']
        },
        files: {
          'styles/main.css': 'styles/' + '/main.styl' 
        }
      }
    },
    // Watches files for changes and runs tasks based on the changed files
    watch: {
      options: {
        nospawn: true,
        livereload: true
      },
      stylus: {
        files: ['styles/**/*.styl', 'index.html', 'views/**/*.html', 'scripts/**/*.js', 'auth/home/**/*.*'],
        tasks: ['stylus'],
      },
    },
  });
  grunt.registerTask('default', ['watch'])  
};
