//add to karma.conf.js below plugins: [...],

browserify: {
  debug: true,
  transform: [ [ 'babelify', {presets: ["es2015"]} ] ]
},
