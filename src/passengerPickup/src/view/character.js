import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Gnome1 from '../Components/Characters/Gnome1';
import Gnome2 from '../Components/Characters/Gnome2';
import Blonde from '../Components/Characters/Blonde';
import Brunette from '../Components/Characters/Brunette';
import Drone1 from '../Components/Characters/Drone1';
import Drone2 from '../Components/Characters/Drone2';
import Drone3 from '../Components/Characters/Drone3';
import BlackCar from '../Components/Characters/CarBlack';
import BlueCar from '../Components/Characters/CarBlue';
import OrangeCar from '../Components/Characters/CarOrange';
import WhiteCar from '../Components/Characters/CarWhite';
import Store from '../store';
import { observer } from 'mobx-react';

class Bot extends Component {
  static contextTypes = {
    loop: PropTypes.object,
    scale: PropTypes.number,
  };
  func = false;
  constructor(props) {
    super(props);
    this.loop = this.loop.bind(this);
  }
  render() {
    switch (this.props.type) {
      case 'gnome1':
        return <div>
          <Gnome1
            position={Store.position[this.props.gameId][this.props.charId]}
            direction={Store.direction[this.props.gameId][this.props.charId]}
          />
        </div>;
      case 'gnome2':
        return <div>
          <Gnome2
            position={Store.position[this.props.gameId][this.props.charId]}
            direction={Store.direction[this.props.gameId][this.props.charId]}
          />
        </div>;
      case 'blonde':
        return <div>
          <Blonde
            position={Store.position[this.props.gameId][this.props.charId]}
            direction={Store.direction[this.props.gameId][this.props.charId]}
          />
        </div>;
      case 'brunette':
        return <div>
          <Brunette
            position={Store.position[this.props.gameId][this.props.charId]}
            direction={Store.direction[this.props.gameId][this.props.charId]}
          />
        </div>;
      case 'drone1':
        return <div>
          <Drone1
            position={Store.position[this.props.gameId][this.props.charId]}
            direction={Store.direction[this.props.gameId][this.props.charId]}
          />
        </div>;
      case 'drone2':
        return <div>
          <Drone2
            position={Store.position[this.props.gameId][this.props.charId]}
            direction={Store.direction[this.props.gameId][this.props.charId]}
          />
        </div>;
      case 'drone3':
        return <div>
          <Drone3
            position={Store.position[this.props.gameId][this.props.charId]}
            direction={Store.direction[this.props.gameId][this.props.charId]}
          />
        </div>;
      case 'black-car':
        return <div>
          <BlackCar
            position={Store.position[this.props.gameId][this.props.charId]}
            direction={Store.direction[this.props.gameId][this.props.charId]}
          />
       </div>;
      case 'blue-car':
        return <div>
          <BlueCar
            position={Store.position[this.props.gameId][this.props.charId]}
            direction={Store.direction[this.props.gameId][this.props.charId]}
          />
      </div>;
      case 'orange-car':
        return <div>
          <OrangeCar
            position={Store.position[this.props.gameId][this.props.charId]}
            direction={Store.direction[this.props.gameId][this.props.charId]}
          />
       </div>;
      case 'white-car':
        return <div>
          <WhiteCar
            position={Store.position[this.props.gameId][this.props.charId]}
            direction={Store.direction[this.props.gameId][this.props.charId]}
          />
       </div>;
      default:
        return <div>
          <Gnome1
            position={Store.position[this.props.gameId][this.props.charId]}
            direction={Store.direction[this.props.gameId][this.props.charId]}
          />
        </div>;
    }
  }
}
export default observer(Bot);