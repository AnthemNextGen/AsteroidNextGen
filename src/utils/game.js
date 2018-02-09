import ioClient from 'socket.io-client'
export class Game{
  constructor(){
  let io = ioClient('localhost:5000');
  io.on('message', function(msg){
    //alert(msg);
  });
  }

  play(){
    console.log('Game playing...');
  }
}
