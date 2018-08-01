import React, { Component } from 'react';
import img1 from '../assets/destination/PickupGreen.png';
import img2 from '../assets/destination/PickupViolet.png';
import Store from '../store';
import Sprite from '../Components/Characters/Sprite';
import { observer } from 'mobx-react';

class Destination extends Component {
    getWrapperStyles(destination) {
        var targetX = destination.takeofX;
        var targetY = destination.takeofY;
        return {
            position: 'absolute',
            transform: `translate(${targetX}px, ${targetY}px)`,
            transformOrigin: 'left top',
            width: '30px',
            height: '30px'
        };
    }
    render() {
        return (
            <div>
                {Store.destination[this.props.gameId][0]!==null&&<div style={this.getWrapperStyles(Store.destination[this.props.gameId][0])}>
                    <Sprite
                        repeat={true}
                        tileWidth={102}
                        tileHeight={102}
                        src={img1}
                        ticksPerFrame={4}
                        state={0}
                        scale={0.3}
                        steps={[7]}
                    />
                </div>}
                {Store.destination[this.props.gameId][1]!==null&&<div style={this.getWrapperStyles(Store.destination[this.props.gameId][1])}>
                    <Sprite
                        repeat={true}
                        tileWidth={102}
                        tileHeight={102}
                        src={img2}
                        ticksPerFrame={4}
                        state={0}
                        scale={0.3}
                        steps={[7]}
                    />
                </div>}
            </div>
        );
    }
}
export default observer(Destination);