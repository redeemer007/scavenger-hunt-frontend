import React, { useState } from "react";
import openSocket from 'socket.io-client';
import {useHistory} from 'react-router-dom';


const SearchByPin = ()=>{
    const [pincode, setPincode]= useState("");
    const history = useHistory();
    const pincodeChange= (event)=>{
        setPincode(event.target.value);
    }
    const socket = openSocket('http://localhost:8082');
    const sendMessage=(event)=>{
        event.preventDefault();
        socket.emit('message', pincode);   
        history.push('/ListOfBranches/'+pincode)     
    }
    return (
        <div>
            <div className="form-group">
                <label>Pincode</label>
                <input type="text" className="form-control" placeholder="Pincode" value={pincode} onChange={pincodeChange}/>
            </div>
            <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={sendMessage}>Search</button>
        </div>
    )
}
export default SearchByPin;