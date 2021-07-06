import React, { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom'
import Branch from "../components/Branch";

const Admin =()=> {
    const [data,setData]=useState([]);
    //const { pincode } = useParams()
    useEffect(() => {
        async function fetchData() {
          const data = await fetch(
            "http://localhost:8082/findAllBranches",
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
        <div>
            <h1>List Of All Branches</h1>
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