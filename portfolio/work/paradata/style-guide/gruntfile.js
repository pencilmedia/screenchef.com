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
            titleCodeStyle: 'Coding Style',
            titleEntities: 'HTML Entities',
            titleTypography: 'Typography',
            titleColors: 'Colors',
            titleIconography: 'Iconography',
            titleAnimation: 'Animation',

            // Components
            titleBreadcrumb: 'Breadcrumb',
            titleButton: 'Buttons',
            titleDialog: 'Modal Dialogs',
            titleForm: 'Forms',
            titleDateRange: 'Date, Date Range',
            titleDateSingle: 'Date, Single Date',
            titleLongListSingle: 'List, Long Single Value',
            titleLongListMulti: 'List, Long Multi Value',
            titleSelectAngular: 'Select2 Box with Angular',
            titleAngularDialog: 'Dialog Modal using Angular',
            titleMoneyInput: 'Money Input',
            titleQuantityInput: 'Quantity Input',
            titleTab: 'Tabs',
            titleTooltip: 'Tooltips',

            // Patterns
            titleForTable: 'Table',

            // Prototype Pages
            titleApp: 'Paradata SaaS',

            // Use them as e.g. @@context
            context: optionsContext,  

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
          update: true, // Update changes made only
          noCache: true,
          sourcemap: 'none',
          style: 'nested' // we don't want to compress it
        },
        files: {                         // Dictionary of files
           'app/assets/css/styleguide.css': 'app/assets/scss/styleguide.scss',  // 'destination': 'source'
           'app/assets/css/theme.css': 'app/assets/scss/theme.scss'
        },
        dist: {
          files: {
             'app/assets/css/styleguide.css': 'app/assets/scss/styleguide.scss',  // 'destination': 'source'
             'app/assets/css/theme.css': 'app/assets/scss/theme.scss'
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
          port: 9908,
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
