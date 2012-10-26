var express = require('express');
var app = express.createServer();

app.configure(function(){
  app.use('/media', express.static(__dirname + '/media'));
  app.use(express.static(__dirname + '/public'));
});

app.listen(process.env.PORT || 8080);

