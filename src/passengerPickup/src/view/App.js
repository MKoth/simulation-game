import React, { Component } from 'react';
import { Loop, Stage } from 'react-game-kit';
//import Store from './store';
import Tile from './tile';
import Character from './character';
import Road from './road';

import Passengers from './passengers';
import Destinations from './destination';
import Updater from 'updater.js';

export default class App extends Component {
    render() {
        return <Loop>
            <Updater></Updater>
            <div style={{height: '98vh', width: '50%', float:"left"}}>
                <Stage width={500} height={500}>
                    <Tile></Tile>
                    <Road></Road>
                    <Passengers gameId={0}></Passengers>
                    <Destinations gameId={0}></Destinations>
                    <Character gameId={0} charId={0}></Character>
                    <Character gameId={0} charId={1}></Character>
                </Stage>
            </div>
            <div style={{height: '98vh', width: '50%', float:"left"}}>
                <Stage width={500} height={500}>
                    <Tile></Tile>
                    <Road></Road>
                    <Passengers gameId={1}></Passengers>
                    <Destinations gameId={1}></Destinations>
                    <Character gameId={1} charId={0}></Character>
                    <Character gameId={1} charId={1}></Character>
                </Stage>
            </div>
        </Loop>
    }
}