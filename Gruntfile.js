module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
   // Compile SASS files into CSS using grunt-dart-sass
   'dart-sass': { // Changed from 'sass' to 'dart-sass'
    options: {
      sourceMap: true,
    },
    dist: {
      files: [{
        expand: true,
        cwd: 'src/scss',
        src: ['*.scss'],
        dest: 'dist/css',
        ext: '.css'
      }]
    }
  },
    
    // Minify JavaScript files
    uglify: {
      options: {
        mangle: false,
        compress: true
      },
      my_target: {
        files: {
          'dist/js/index.js': ['src/js/index.js']
        }
      }
    },
    
    // Watch for changes and run tasks
    watch: {
      'dart-sass': {
        files: ['src/scss/*.scss'],
        tasks: ['dart-sass']
      },
      scripts: {
        files: ['src/js/*.js'],
        tasks: ['uglify']
      }
    }
  });

  // Load the plugins that provide the tasks.
  grunt.loadNpmTasks('grunt-dart-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['dart-sass', 'uglify', 'watch']);
};
