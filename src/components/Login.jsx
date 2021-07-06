import React, { Component } from "react";
import openSocket from 'socket.io-client';
//import {useHistory} from 'react-router-dom';


export default class Login extends Component {
    state = {
        branchName : "",
        password : ""
    }
    socket = openSocket('http://localhost:8082');
    branchNameChange= (event) =>{
        this.setState({branchName: event.target.value});
    }
    passwordChange= (event) =>{
        this.setState({password: event.target.value});
    }
    //history = useHistory();

    validateUser = async (event)=>{
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            //mode: 'no-cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: this.state.branchName,password:this.state.password })
        };
        const response = await fetch('http://localhost:8082/login', requestOptions);
        const data = await response.json();
        if(data.status==true){
            localStorage.setItem('username', data.data.branchName);
            this.socket.emit('loggedin', data.data);
            console.log(this.props);
            this.props.history.push('/SawNotification')
        }else{
            alert("Wrong username and password");
        }
            // .then(response => response.json())
            // .then(data => console.log(data));
    }
    render() {
        return (
            <form>

                <h3>Log in</h3>

                <div className="form-group">
                    <label>Branch Name</label>
                    <input type="text" className="form-control" placeholder="Branch Name" value={this.state.branchName} onChange={this.branchNameChange}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={this.state.password} onChange={this.passwordChange}/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.validateUser}>Sign in</button>
            </form>
        );
    }
}