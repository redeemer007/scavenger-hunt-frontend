import React, { Component } from 'react';
import openSocket from 'socket.io-client';
//import { subscribeToTimer } from './subscribeToTimer';

class SawNotification extends Component {
    constructor(){
        super();
        this.state = {message: ""  }
        const socket = openSocket('https://scavengerhunt-backend.herokuapp.com');
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
                <button type="submit" className="btn btn-dark btn-lg btn-block mr-10" onClick={logout} style={{
                    marginLeft: '90rem',
                    marginTop: '3rem'
                }}>Logout</button>
            </div>
            {this.state.message}
            
        </div>  );
    }
}
 
export default SawNotification;