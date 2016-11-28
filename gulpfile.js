var gulp = require("gulp"); // to organize tasks
var browserify = require('browserify'); // to bundle javascript files for the browser
var source = require('vinyl-source-stream'); // to convert browserify stream into vinyl format for gulp
var spawn = require('child_process').spawn; // to apply terminal command from here
var fs = require('fs'); // File System module to read, write, etc.
var node; // for the server Object

gulp.task('browserify', function() {
  return browserify("./test/test.js")
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./test/build'));
});

gulp.task('server', function() {
  if (node) node.kill();
  node = spawn('node', ['test/server.js'], {stdio: 'inherit'});
  node.on('close', function (code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });
});

gulp.task('watch', function() {

  var watch_tasks = ['browserify'],
      watch_list = ['./test/test.js'];


  var watcher = gulp.watch(watch_list, watch_tasks);
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    io.sockets.emit('browserRefresh');
  });

  var server = require("./test/server");
  var io = require('socket.io').listen(server);
});

gulp.task('default', ["browserify", "watch"]);
