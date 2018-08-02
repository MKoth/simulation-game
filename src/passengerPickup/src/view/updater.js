import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Simulation from '../simulation/simulation';
import level1 from '../simulation/level1';
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
        this.simulation = new Simulation(config,level1,level3);
    }
    loop = () => {
        var data = this.simulation.simulate();
        //console.log(data.bots[0][0].x);
        var gamesQount = 2;
        var charQount = 2;
        for(var i=0;i<gamesQount;i++){
            Store.updatePassengers(i, data.collectives[i]);
            //Store.updateScore(i, data.);
            for(var j=0;j<charQount;j++){
                Store.updatePosition(i, j, data.bots[i][j], 1);
                Store.updateDirection(i, j, data.direction[i][j]);
                Store.updateDestination(i, j, data.bots[i][j].passenger);
            }
        }
    }
    componentDidMount() {
        this.loopID = this.context.loop.subscribe(this.loop);
    }
    componentWillUnmount() {
        this.context.loop.unsubscribe(this.loopID);
    }
    render() {
        return (<div></div>)
    }
} 

export default observer(Updater);