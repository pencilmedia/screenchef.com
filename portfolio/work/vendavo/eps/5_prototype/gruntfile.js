module.exports = function(grunt) {


  grunt.loadNpmTasks('grunt-replace');
  grunt.loadNpmTasks('grunt-include-replace');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  require('load-grunt-tasks')(grunt);

  var optionsContext = grunt.option('context') || '';
  var optionsDev = grunt.option('dev') || false; 

  grunt.initConfig({
    includereplace: {
      your_target: {
        options: {
          globals: {
            // GLOBAL VARIABLES

            // Foundations
            titleEntities: 'HTML Entities',
            titleTypography: 'Typography',
            titleColors: 'Colors',
            titleIconography: 'Iconography',
            titleAnimation: 'Animation',

            // Components
            titleBreadcrumb: 'Breadcrumb',
            titleButton: 'Buttons',
            titleForm: 'Forms',
            titleDateRange: 'Date, Date Range',
            titleDateSingle: 'Date, Single Date',
            titleLongListSingle: 'List, Long Single Value',
            titleLongListMulti: 'List, Long Multi Value',
            titleMoneyInput: 'Money Input',
            titleQuantityInput: 'Quantity Input',

            // Patterns
            titleTable: 'Table',

            // Prototype Pages
            titleExplorer: 'Price Explorer',

            // Use them as e.g. @@context
            context: optionsContext,  
            pezziLocation: optionsDev ? 'http://localhost:3000/dist/Pezzi.build.js' : 'http://ux01-paux.xenre.vendavo.com/pezzi/Pezzi.build.js'
          }
          
        },
        // Files to perform replacements and includes with
        src: './app/**/*.html',
        // Destination directory to copy files to
        dest: 'dist/'
      }
    },
    copy: {
      main: {
        files: [{
            src: './app/**/*',
            dest: './dist/'
          }

        ],
      },
    },
    clean: {
      build: {
        src: ["./dist/**/*"]
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
           'app/_/css/styleguide.css': 'app/_/scss/styleguide.scss',  // 'destination': 'source'
           'app/_/css/theme.css': 'app/_/scss/theme.scss'
        },
        dist: {
          files: {
             'app/_/css/styleguide.css': 'app/_/scss/styleguide.scss',  // 'destination': 'source'
             'app/_/css/theme.css': 'app/_/scss/theme.scss'
          }
        }
      }
    },
    watch: {
      scripts: {
        files: ['./app/**/*.html', './app/**/*.scss', './app/**/*.js', './app/**/*.tpl'],
        tasks: ['build'],
        options: {
          livereload: true,
          nospawn: true,
        },
      },
      sass: {
        // We watch and compile sass files as normal but don't live reload here
        files: ['./app/**/*.scss'],
        tasks: ['sass'],
      },

    },
    connect: {
      server: {
        options: {
          port: 9909,
          base: './dist/app',
          hostname: 'localhost',
          // middleware: function(connect, options, middlewares) {

          // // CORS
          // middlewares = [];

          // middlewares.push(function(req, res, next) {
          //   res.setHeader('Access-Control-Allow-Origin', '*');
          //   res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
          //   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
          //   next();
          // });

          // middlewares.push(
          //   connect.static(options.base)
          // );
          // middlewares.push(
          //   connect.directory(options.base)
          // );

          // return middlewares;
          // }
        }
      }
    }
  });

  grunt.registerTask('build', ['clean', 'copy', 'includereplace', 'sass']);
  grunt.registerTask('default', ['build', 'connect', 'watch']);
};