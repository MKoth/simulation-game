import level1 from './level1';
import level2 from './level2';
import level3 from './level3';
import config from './config.json';
import React, { Component } from 'react';
import tableResult from './table-result';

class Tournament extends Component {
    constructor(){
        super();
        this.state = {
            presult:"",
            showTable:true
        }
    }
    render() {
        return (
            <div style={{position:'absolute', zIndex:100, left:'50%', transform:'translate(-50%, 0%)', top:'45px'}}>
                <div style={{textAlign:'center'}}>
                    <button class="control-btn active"  onClick={()=>{
                        /*tournamentSimulate.default().then((result)=>{
                            this.setState({presult : result, showTable: true});
                        });*/
                        var result = tableResult([level1,level2,level3], config);
                        this.setState({presult : result, showTable: true});
                    }}
                    >Run tournament</button>
                    <button class="control-btn active" onClick={()=>{
                        this.setState({showTable: !this.state.showTable});
                    }}>Hide tournament</button>
                </div>
                <div style={{background:'white'}}>
                    {
                        this.state.showTable && <p dangerouslySetInnerHTML={{__html: this.state.presult}} />
                    }
                </div>
            </div>
        );
      }
}
export default Tournament;