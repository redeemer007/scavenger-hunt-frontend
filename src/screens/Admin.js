import React, { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom'
import Branch from "../components/Branch";

const Admin =()=> {
    const [data,setData]=useState([]);
    //const { pincode } = useParams()
    useEffect(() => {
        async function fetchData() {
          const data = await fetch(
            "https://scavengerhunt-backend.herokuapp.com/findAllBranches",
            {
              mode: "cors",
              headers: {
                "Access-Control-Allow-Origin": "*",
              },
            }
          );
          const d=await data.json();
          console.log(d);
          setData(d);
        }
        fetchData();
      }, []); 
      return (
        <div style={
            {
                paddingLeft: "28rem"
            }
        }>
            <h1 style={
                {
                    marginTop: "2rem",
                    marginBottom: "1rem",
                    marginLeft: "2rem"
                }
            }>List Of Allow Branches</h1>
           {
               data.map(d=>{
                return(   <div>
                       <Branch {...d}/>
                    </div>
                )
               })
           } 
        </div>
    )
}

export default Admin;