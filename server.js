
var express = require('express');

var app = express();
var server = app.listen(3000);

app.use(express.static('public'));

console.log("my server is running");

var socket = require('socket.io');

var io = socket(server);

io.sockets.on('connection', newConnection);

function newConnection(socket){
  console.log('new connection: ' + socket.id);

socket.on('words', newMsg);

function newMsg(data){
  socket.broadcast.emit('words', data);
  console.log(data);
}


}
