module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      all: ['*.js', 'app/**/*.js', 'controllers/**/*.js', 'public/js/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          require: true,
          define: true,
          module: true,
          exports: true,
          process: true,
          __dirname: true,
          requirejs: true,
          describe: true,
          expect: true,
          it: true,
          console: true
        }
      },
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: "public/js",
          mainConfigFile: "public/js/build.js",
          name: "main",
          out: "public/js.built/main.js",
          optimize: "uglify2",
          generateSourceMaps: true,
          preserveLicenseComments: false,
          stubModules: ['rdust']
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Default task(s).
  grunt.registerTask('build', ['jshint', 'requirejs']);
  grunt.registerTask('default', ['jshint']);

};

