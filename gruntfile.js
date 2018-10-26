module.exports = function(grunt){
  grunt.initConfig({
      cssmin: {
        target: {
          files: [{
            expand: true,
            cwd: 'css/',
            src: ['css/style.css', '!css/styl.min.css'],
            dest: 'css/',
            ext: '.min.css'
          }]
        }
    },
    jshint: {
        files: ["js/script.js", "js/script.js"],
        options: {
            globals:{
                jQuery: true
            }
        }
    },
    csslint: {
        strict: {
          options: {
            import: 2
          },
          src: ["css/style.css"]
        }
    },
    uglify:{
        my_target:{
            files: {
                "js/script.min.js":["js/script.js"]
            }
        }
    },
    sass:{
        dist:{
            files:{
                "css/style.css":"sass/style.scss"
            }
        }
    },
    watch: {
        css:{
            files:["css/style.css", "css/sass.css"],
            tasks:["csslint", "cssmin"]
        },
        js:{
            files:["js/script.js"],
            tasks:["jshint", "uglify"]
        },
        sass:{
            files:["sass/*.scss"],
            tasks:["sass"]
        }
    }
  });

  // grunt.loadNpmTasks();
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // grunt.registerTask();
  grunt.registerTask('default', ['cssmin']);
  grunt.registerTask('compile', ['sass']);
  grunt.registerTask('debug', ['jshint', 'csslint']);
  grunt.registerTask('min', ['csslint', 'cssmin','jshint', 'uglify']);
  grunt.registerTask('w', ['watch']);







};
