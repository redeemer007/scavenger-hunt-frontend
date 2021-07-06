import React, { Component } from "react";

class Branch extends Component {    
    render() { 
        return (
            <div className="container-fluid">
            
            <div style={{
                width: "800px",
                height: "350px",
                margin: 0,
                border: "1px solid black"
              }} className="container-fluid">
                  
              <div className="row">
                  <h2>Branch Name :{this.props.branchName}</h2>                
              </div>              
                <div className="row">
                  <h2>Address :{this.props.address}</h2>                
              </div>
              <div className="row">
                  <h2>City :{this.props.city}</h2>                
              </div>
              <div className="row">
                  <h2>Contact Number :</h2> 
                  {
                      this.props.contactNumber.map(cn=>{
                       return(<h4 >{cn}
                        </h4>
                      )
                      })
                  }               
              </div>              
                <div className="row">
                  <h2>Branch Incharge :{this.props.branchIncharge}</h2>                
              </div>
            </div>
            </div>
          );
    }
}
 
export default Branch;