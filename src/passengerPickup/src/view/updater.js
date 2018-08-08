import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Simulation from '../simulation/simulation';
import control from '../simulation/control';
import level1 from '../simulation/level1';
import level2 from '../simulation/level2';
import level3 from '../simulation/level3';
import config from '../simulation/config.json';
import Store from '../store';

class Updater extends Component {
    static contextTypes = {
        loop: PropTypes.object
    };
    constructor(props) {
        super(props);
        this.loop = this.loop.bind(this);
        this.pauseResumeGame = this.pauseResumeGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
        this.changePlayer1Func = this.changePlayer1Func.bind(this);
        this.changePlayer2Func = this.changePlayer2Func.bind(this);
        Store.player1Func = level3;
        Store.player2Func = control;
        if(this.getURLParameters('player1')){
            var funcName = this.getURLParameters('player1');
            switch(funcName){
                case 'control':
                    Store.player1Func = control;
                    break;
                case 'level1':
                    Store.player1Func = level1;
                    break;
                case 'level2':
                    Store.player1Func = level2;
                    break;
                case 'level3':
                    Store.player1Func = level3;
                    break;
                default:
                    break
            }
        }
        if(this.getURLParameters('player2')){
            var funcName = this.getURLParameters('player2');
            switch(funcName){
                case 'control':
                    Store.player2Func = control;
                    break;
                case 'level1':
                    Store.player2Func = level1;
                    break;
                case 'level2':
                    Store.player2Func = level2;
                    break;
                case 'level3':
                    Store.player2Func = level3;
                    break;
                default:
                    break;
            }
        }
        this.simulation = new Simulation(config,Store.player1Func,Store.player2Func);
    }
    loop = () => {
        if(Store.mode == 'play'){
            if(Store.time<=0){
                Store.mode = 'pause'
            }
            if(Math.abs(Store.prevTime - Date.now())>=1000){
                Store.time --;
                Store.prevTime = Date.now();
            }
            var data = this.simulation.simulate();
            var gamesQount = 2;
            var charQount = 2;
            for(var i=0;i<gamesQount;i++){
                Store.updatePassengers(i, data.collectives[i]);
                Store.updateScore(i, data.score[i]);
                for(var j=0;j<charQount;j++){
                    Store.updatePosition(i, j, data.bots[i][j], 1);
                    Store.updateDirection(i, j, data.direction[i][j]);
                    Store.updateDestination(i, j, data.bots[i][j].passenger);
                }
            }
        }
    }
    getURLParameters(paramName)
    {
        var sURL = window.document.URL.toString();
        if (sURL.indexOf("?") > 0)
        {
            var arrParams = sURL.split("?");
            var arrURLParams = arrParams[1].split("&");
            var arrParamNames = new Array(arrURLParams.length);
            var arrParamValues = new Array(arrURLParams.length);

            var i = 0;
            for (i = 0; i<arrURLParams.length; i++)
            {
                var sParam =  arrURLParams[i].split("=");
                arrParamNames[i] = sParam[0];
                if (sParam[1] != "")
                    arrParamValues[i] = unescape(sParam[1]);
                else
                    arrParamValues[i] = "No Value";
            }
            for (i=0; i<arrURLParams.length; i++)
            {
                if (arrParamNames[i] == paramName)
                {
                    //alert("Parameter:" + arrParamValues[i]);
                    return arrParamValues[i];
                }
            }
            return false;
        }
    }
    changePlayer1Func(e){
        Store.player1Func = eval("("+e.target.value+")");
        this.restartGame();
    }
    changePlayer2Func(e){
        Store.player2Func = eval("("+e.target.value+")");
        this.restartGame();
    }
    pauseResumeGame(){
        if(Store.mode == 'play')
            Store.mode = 'pause';
        else
            Store.mode = 'play';
        //Store.mode == 'play'?'pause':'play';
    }
    restartGame(){
        Store.time = config.time;
        this.simulation = new Simulation(config,Store.player1Func,Store.player2Func);
        Store.mode = 'play';
    }
    componentDidMount() {
        this.loopID = this.context.loop.subscribe(this.loop);
    }
    componentWillUnmount() {
        this.context.loop.unsubscribe(this.loopID);
    }
    render() {
        return (<div>
            {Store.time<=0&&<div className={"gameEndWindow"} style={{
                position:'absolute',
                width:'100%',
                height:'100vh',
                background:'green',
                zIndex:200
            }}>
                <h1 style={{
                    textAlign:'center',
                    marginTop:'40vh',
                    color:'#fff'
                }}>
                    {Store.score[0]>Store.score[1]?'Player 1 won!!!':''}
                    {Store.score[0]<Store.score[1]?'Player 2 won!!!':''}
                    {Store.score[0]==Store.score[1]?'Score is even!':''}
                </h1>
                <button style={{
                    margin:'0 auto',
                    display:'block', 
                    border:'3px solid white', 
                    color:'white', 
                    background:'none',
                    padding:'10px 40px',
                    fontWeight:'bold'
                }} onClick={() => this.restartGame()}>RESTART</button>
            </div>}
            <p style={{position:'absolute', left:0, top:0, margin:0, zIndex:100}}>
                Player 1 score: {Store.score[0]}
                <select value={Store.player1Func} onChange={this.changePlayer1Func}>
                    <option value={control}>Manual control</option>
                    <option value={level1}>Level 1</option>
                    <option value={level2}>Level 2</option>
                    <option value={level3}>Level 3</option>
                </select>
            </p>
            <p style={{position:'absolute', right:0, top:0, margin:0, zIndex:100}}>
                <select value={Store.player2Func} onChange={this.changePlayer2Func}>
                    <option value={control}>Manual control</option>
                    <option value={level1}>Level 1</option>
                    <option value={level2}>Level 2</option>
                    <option value={level3}>Level 3</option>
                </select>
                Player 2 score: {Store.score[1]}
            </p>
            <p style={{position:'absolute', left:'50%', top:'0', transform:'translate(-50%, -50%)', zIndex:100}}>
                <p style={{margin:0, textAlign:'center'}}>Time left:{Store.time}</p>
                <button onClick={() => this.restartGame()}>Restart</button>
                <button onClick={() => this.pauseResumeGame()}>{Store.mode == 'play' ? 'Pause' : 'Resume'}</button>
            </p>
        </div>)
    }
} 

export default observer(Updater);