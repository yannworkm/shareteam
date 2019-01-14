var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});
<<<<<<< HEAD

io.on('connection', function(socket) {
  socket.on('chat message', function(msg) {
=======
//test
io.on('connection', function(socket){
  socket.on('chat message', function(msg){
>>>>>>> 2cb004fd72605720a4dbc708d44db1d57d93c075
    io.emit('chat message', msg);
  });
});

http.listen(port, function() {
  console.log('listening on *:' + port);
});