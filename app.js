var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

<<<<<<< HEAD
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/connexion.html');
});
app.get('/chat', function(req, res) {
  res.sendFile(__dirname + '/chat.html');
});
=======
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
>>>>>>> ee880086251d97a212d4ff98ee99d9fd91af9da1

io.on('connection', function(socket){
  socket.on('connection')  function(name,city,age){

  }
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
