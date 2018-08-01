import React, { Component } from 'react';
import Store from '../store';
import img from '../assets/passenger/passenger.png';
import squadConfig from '../simulation/config.json';

class Passengers extends Component {
    constructor() {
        super();
    }

    render(){
        return <div>{Store.passengers[this.props.gameId].map((passenger, index) => {
            return <div style={{
                position: 'absolute',
                transform: 'translate(' + passenger.x + 'px, ' + passenger.y + 'px) translateZ(0)',
                transformOrigin: 'top left',
                width: squadConfig.passengerSize,
                height: squadConfig.passengerSize
            }}>
                <img
                    style={{ 'width': '100%', 'height': '100%' }}
                    src={img}
                />
            </div>;
        })}</div>;
    }
}
export default observer(Passengers);