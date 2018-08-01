import { observable, computed, extendObservable } from 'mobx';
import squadConfig from './simulation/config.json';

class passengerStore {
    constructor() {
        extendObservable(this, {
            time: squadConfig.time,
            position: [
                [
                    squadConfig.player1StartingPoint,
                    squadConfig.player2StartingPoint
                ],
                [
                    squadConfig.player1StartingPoint,
                    squadConfig.player2StartingPoint
                ]
            ],
            direction: [['right','down'], ['right','down']],
            passengers: [[], []],
            destination: [[null, null], [null, null]],
            score: [0, 0],
            mode: 'play'
        });
    }
    updatePosition(gameId, playerId, newPosition, offset){
        if(this.position[gameId][playerId].x - newPosition.x >= offset || this.position[gameId][playerId].y - newPosition.y >= offset){
            this.position[gameId][playerId] = newPosition;
        }
    }
    updatePassengers(gameId, passengersArr){
        if(this.passengers[gameId].length !== passengersArr.length){
            this.passengers[gameId] = passengersArr;
        }
    }
    updateDirection(gameId, playerId, newDirection){
        if(this.direction[gameId][playerId]!=newDirection){
            this.direction[gameId][playerId]=newDirection;
        }
    }
    updateDestination(gameId, playerId, destination){
        if(destination[gameId][playerId]!==destination){
            destination[gameId][playerId]=destination;
        }
    }
    updateScore(gameId, score){
        if(this.score[gameId]!==score)
            this.score[gameId]=score;
    }
}

export default new passengerStore();