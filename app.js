var app = require('express')();
var http = require('http').Server(app);
var socket = require('socket.socket')(http);
var port = process.env.PORT || 3000;
var ent = require('ent');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.get('/', functsocketn(req, res) {
  res.sendFile(__dirname + '/connexion.html');
});
app.post('/chat',urlencodedParser,  urlencodedParser, function (req, res){
    console.log('lol')
    res.sendFile(__dirname + '/index.html');
});

socket.on('connection', function(socket, pseudo){

  socket.on('chat message', function(message){
    message = ent.encode(message);
    socket.broadcast.emit('chat message', {pseudo: socket.pseudo, message: message});
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
