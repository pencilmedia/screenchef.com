module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	// Set Relative Path
	var optionsContext = grunt.option('context') || '';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// SCSS to CSS convert
		sass: {
			build: { // Target
				options: {
					update: true, // Update changes made only
					noCache: true,
					sourcemap: 'auto',
          			style: 'nested' // we don't want to compress it
				},
				files: {
					'assets/stylesheets/main.css': 'scss/main.scss',
					'assets/fonts/webfonts.css': 'scss/webfonts.scss'
				}
			}
		},
		// LiveReload in browser
		watch: {
			scripts: {
				files: ['scss/**/*.scss', 'assets/javascripts/**/*js'], // File types to watch for
				tasks: ['sass'], // Tasks that should run on save
				options: {
					livereload: true,
					spawn: false
				},
			},
			sass: {
				// We watch and compile sass files as normal but don't live reload here
				files: ['scss/**/*.scss'],
				tasks: ['sass']
			}
		}
	});
	// Register Tasks - on save and on first build
	grunt.registerTask('build', ['sass']);
	grunt.registerTask('default', ['build', 'watch']);
};