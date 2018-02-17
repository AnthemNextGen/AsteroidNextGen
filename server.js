var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


var players = {};
io.on('connection', (socket)=> {
  socket.on('new player', ()=> {
    players[socket.id] = {
      posX: 300,
      posY: 300,
      angle: 0
    };
  });
  socket.on('join', (msg)=>{
    console.log(msg);
    console.log(players);
  })

  socket.on('disconnect', ()=>{
    console.log('Player: '+ players[socket.id]+ ' left');
    delete players[socket.id];
  });

  socket.on('movement', (data)=> {
    var player = players[socket.id] || {};
    if (data.left) {
      player.posX -= 5;
    }
    if (data.up) {
      player.posY -= 5;
    }
    if (data.right) {
      player.posX += 5;
    }
    if (data.down) {
      player.posY += 5;
    }
    if(data.clockwise){
      player.angle += 2;
    }

    if(data.anticlockwise){
      player.angle -= 2;
    }
  });
});

setInterval(()=> {
  io.sockets.emit('state', players);
}, 1000 / 60);


http.listen(process.env.PORT || 5000, ()=>{
  console.log('listening on *:5000');
});
