var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var ent = require('ent');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

// Encodage des variables inter pages
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// affichage du css
app.use(express.static('public'));

// route connexion
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/connexion.html');
});

// route chat
app.post('/chat', function(req, res) {
    //var username = req.body.pseudo;
    //console.log(username);
    res.sendFile(__dirname + '/index.html');
});

// socket permettant d'afficher le chat

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
// Afffiche le port
http.listen(port, function(){
  console.log('listening on *:' + port);
});
