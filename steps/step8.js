//add to karma.conf.js

    frameworks: ['jquery-3.2.1', 'jasmine', 'browserify'],

    files: [
      'js/*.js',
      'spec/*-spec.js',
    ],

    preprocessors: {
      'js/*.js': [ 'browserify'],
      'spec/*.js': ['browserify'],
    },

    plugins: [
      'karma-jquery',
      'karma-browserify',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter'
    ],

    reporters: ['progress', 'kjhtml'],

//add to package.json

"scripts": {
  "test": "karma start karma.conf.js"
},
