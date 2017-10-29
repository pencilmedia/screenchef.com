module.exports = function(grunt) {

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		// For creating variables/includes used in the HTML
		includereplace: {
			dist: {
				options: {
					// Task-specific options go here.
					globals: {
						// Product Titles
						productBom: 'BOM Advantage',
						productCatalog: 'Catalog Optimizer',
						productMaterial: 'New Material Request',
						// Account
						accountManager: 'Account Manager'
					}
				},
				// Files to perform replacements and includes with
				src: './app/**/*.html',
				// Destination directory to copy files to
				dest: '../www/'
			}
		},
		// SCSS to CSS convert
		sass: {
			// Task
			dist: { // Target
				options: { // Target options
					style: 'expanded'
				},
				files: { // Dictionary of files
					'app/common/css/theme.css': 'app/common/scss/theme.scss' // 'destination': 'source'
				},
				dist: {
					files: {
						'app/common/css/theme.css': 'app/common/scss/theme.scss' // 'destination': 'source'
					}
				}
			}
		},
		// Output a copy to display in browser
		copy: {
			main: {
				files: [{
					expand: true,
					src: ['app/**/*'],
					dest: '../www/'
				}],
			},
		},
		// LiveReload in browser
		watch: {
			scripts: {
				files: ['./app/**/*.html', './app/**/*.css', './app/**/*.scss', './app/**/*.js', './app/**/*.tpl'], // File types to watch for
				tasks: ['copy', 'build', 'includereplace'], // Tasks that should run on save
				options: {
					livereload: true,
					spawn: false,
				},
			},
			sass: {
				// We watch and compile sass files as normal but don't live reload here
				files: ['./app/common/**/*.scss'],
				tasks: ['sass'],
			}
		},
		// Serve the goodies!
		connect: {
			server: {
				options: {
					port: 9909,
					//base: './dist/app',
					base: '../www/app',
					hostname: 'localhost'
				}
			}
		}
	});
	// Register Tasks
	grunt.registerTask('build', ['copy', 'includereplace', 'sass']);
	grunt.registerTask('default', ['build', 'copy', 'connect', 'watch']);
};