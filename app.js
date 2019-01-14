var app = require('express')();
var http = require('http').Server(app);
var socket = require('socket.socket')(http);
var port = process.env.PORT || 3000;
var ent = require('ent');

app.get('/', functsocketn(req, res) {
  res.sendFile(__dirname + '/connexsocketn.html');
});
app.get('/chat', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

socket.on('connection', function(socket, pseudo){
  socket.on('connect', function(pseudo) {
        pseudo = ent.encode(pseudo);
        socket.pseudo = pseudo;
        socket.broadcast.emit('connect', pseudo);
    });


  socket.on('chat message', function(message){
    message = ent.encode(message);
    socket.broadcast.emit('chat message', {pseudo: socket.pseudo, message: message});
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
