import React, { Component } from 'react';
import openSocket from 'socket.io-client';
//import { subscribeToTimer } from './subscribeToTimer';

class SawNotification extends Component {
    constructor(){
        super();
        this.state = {message: ""  }
        const socket = openSocket('http://localhost:8082');
        socket.on('message', function(msg) {
            console.log(msg);
           this.setState({message: msg});
        });
    }
  
  

    render() { 
       const logout=()=>{
            localStorage.removeItem("username");
            this.props.history.push('/login');
        }
        return (<div>
            <div>
                <h3 onClick={logout}>Logout</h3>
            </div>
            {this.state.message}
            
        </div>  );
    }
}
 
export default SawNotification;