module.exports = function(grunt) {

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	// Set Relative Path
	var optionsContext = grunt.option('context') || '';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// For creating variables/includes used in the HTML
		includereplace: {
			dist: {
				options: {
					// Task-specific options go here.
					globals: {
						// Page IDs, classNames & Titles
						authenticateID: 'authentication',
						authenticateClass: 'authenticate',

						accountsTitle: 'Customer Accounts',
						accountsID: 'customer-accounts',
						accountsClass: 'customer-accounts',

						nmrTitle: 'New Material Request',
						nmrDetailsID: 'nmr-details',
						nmrClass: 'new-material',

						bomTitle: 'BOM Advantage',
						bomID: 'bom-advantage',
						bomClass: 'bom-advantage',

						catalogTitle: 'Catalog Optimizer',
						catalogID: 'catalog-optimizer',
						catalogClass: 'catalog-optimizer',

						customerManager: 'Manage Customers',
						classManager: 'manage-customers',

						// Manage
						usersTitle: 'Manage Users',
						usersID: 'manage-users',
						usersClass: 'manage-users',

						dictionaryTitle: 'Manage Data Dictionary',
						dictionaryID: 'manage-data',
						dictionaryClass: 'manage-data',

						usageTitle: 'Manage Usage',
						usageID: 'manage-use',
						usageClass: 'manage-use',

						// Prototype 
						productProto: 'Paradata Prototype',
						classProto: 'para-proto',

						context: optionsContext
					}
				},
				// Files to perform replacements and includes with
				src: './app/**/*.html',
				// Destination directory to copy files to
				dest: './dist/'
			}
		},
		// SCSS to CSS convert
		sass: {
			build: { // Target
				options: {
					update: true, // Update changes made only
					noCache: true,
					sourcemap: 'none',
          			style: 'nested' // we don't want to compress it
				},
				files: { // Dictionary of files
					'app/common/css/theme.css': 'app/common/scss/theme.scss', // 'destination': 'source' - main css
					'app/common/css/authenticate.css': 'app/common/scss/components/authenticate.scss', // separated from theme - component css
					'app/global_nav/css/global_navbar.css': 'app/global_nav/scss/global_navbar.scss', // global navbar specific css
					'app/common/css/styleguide.css': 'app/common/scss/styleguide.scss' // For development only
				}
			}
		},
		// Clean out unused files
		clean: {
			build: {
				src: ["./dist/**/*"]
			}
		},
		// Output a copy to display in browser
		copy: {
			main: {
				files: [{
					expand: true,
					src: ['app/**/*', '!**/inc/**', '!**/scss/**', '!**/*.tpl', '!**/global_nav/css'], // Don't copy inc, scss folders or .tpl's
					dest: './dist/'
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
					spawn: false
				},
			},
			sass: {
				// We watch and compile sass files as normal but don't live reload here
				files: ['./app/common/**/*.scss'],
				tasks: ['sass']
			}
		},
		// Serve the goodies!
		connect: {
			server: {
				options: {
					port: 9909,
					base: './dist/app',
					hostname: '*'
				}
			}
		}
	});
	// Register Tasks - on save and on first build
	grunt.registerTask('build', ['clean', 'copy', 'includereplace', 'sass']);
	grunt.registerTask('default', ['build', 'copy', 'includereplace', 'connect', 'watch']);
};