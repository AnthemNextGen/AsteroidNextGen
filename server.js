var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


var players = {};
io.on('connection', function(socket) {
  socket.on('new player', function() {
    players[socket.id] = {
      x: 300,
      y: 300,
      angle: 0
    };
  });
  socket.on('join', function(msg){
    console.log(msg);
  })

  socket.on('movement', function(data) {
    var player = players[socket.id] || {};
    if (data.left) {
      player.x -= 5;
    }
    if (data.up) {
      player.y -= 5;
    }
    if (data.right) {
      player.x += 5;
    }
    if (data.down) {
      player.y += 5;
    }
    if(data.clockwise){
      player.angle += 2;
    }

    if(data.anticlockwise){
      player.angle -= 2;
    }
  });
});

setInterval(function() {
  io.sockets.emit('state', players);
}, 1000 / 60);


http.listen(process.env.PORT || 5000, function(){
  console.log('listening on *:5000');
});
