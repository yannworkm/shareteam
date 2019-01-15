var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var ent = require('ent');
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static('public'));


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/connexion.html');
});
app.post('/chat', function(req, res) {
    var username = req.body.pseudo;
    console.log(username);
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
