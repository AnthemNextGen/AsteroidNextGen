import ioClient from 'socket.io-client';
import {movements as movement} from './controls';

export const splashScreen = document.getElementById('splash');
export const gameScreen = document.getElementById('game');
export const gameCtx = gameScreen.getContext('2d');
export const  ship = document.getElementById('ship');

gameScreen.width = innerWidth;
gameScreen.height = innerHeight;

document.addEventListener('keydown', function(event) {
  switch (event.keyCode) {
    case 65: // A to move Left
      movement.left = true;
      break;
    case 87: // W  to move Up
      movement.up = true;
      break;
    case 68: // D to move right
      movement.right = true;
      //console.log(movement.right);
      break;
    case 83: // S to move down
      movement.down = true;
      break;
    case 37:
      console.log('Rotate anti-clockwise');
      break;
    case 38:
      movement.up = true;
      console.log('Move up');
      break;
    case 39:
      console.log('Rotate Clockwise');
      break;
    case 40:
      movement.down = true;
      console.log('Move down');
      break;
  }
});

document.addEventListener('keyup', function(event) {
  switch (event.keyCode) {
    case 65: // A
      movement.left = false;
      break;
    case 87: // W
      movement.up = false;
      break;
    case 68: // D
      movement.right = false;
      break;
    case 83: // S
      movement.down = false;
      break;
    case 32:
      alert('Shoot...');
      break;
    case 37:
        console.log('Rotate anti-clockwise');
        break;
    case 38:
        movement.up = false;
        console.log('Move up');
        break;
    case 39:
        console.log('Rotate Clockwise');
        break;
    case 40:
        movement.down = false;
        console.log('Move down');
        break;
  }
});

function drawShip() {
  // the triangle
  gameCtx.beginPath();
  gameCtx.moveTo(200, 100);
  gameCtx.lineTo(170, 150);
  gameCtx.lineTo(230, 150);
  gameCtx.closePath();

  // the outline
  gameCtx.lineWidth = 6;
  gameCtx.strokeStyle = "rgba(102, 102, 102, 1)";
  gameCtx.stroke();

  // the fill color

  gameCtx.fill();
}




// Jesse will be pissed with this: Refactor it.
export class Game{
  constructor(){
    this.io = ioClient('localhost:5000');
  }

  play(){
    // Game Code goes Here
    const sock = this.io;
    this.io.emit('new player');
    this.io.emit('join', "A player Joinned");

    setInterval(function(){
      sock.emit('movement', movement);
    }, 1000/60);

    this.io.on('state', function(players) {
        console.log(players);
        gameCtx.clearRect(0, 0, innerWidth, innerHeight);
        gameCtx.fillStyle = 'teal';
        gameCtx.strokeRect(5,5, innerWidth-10, innerHeight-10);
        for (var id in players) {
          var player = players[id];
          gameCtx.beginPath();
          gameCtx.drawImage(ship, player.x, player.y);
          gameCtx.fill();
        }
      });
  }
}
