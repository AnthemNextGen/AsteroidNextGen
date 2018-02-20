import {gameCtx} from './game';

export const drawShip = (ship, posX, posY)=>{
    gameCtx.drawImage(ship, posX, posY);
}
