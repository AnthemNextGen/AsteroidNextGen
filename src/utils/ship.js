import {gameCtx} from './game';

export const drawShip = function(ship, posX, posY){
    gameCtx.drawImage(ship, posX, posY);
}
