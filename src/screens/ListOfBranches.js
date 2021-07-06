import React, { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom'
import Branch from "../components/Branch";

const ListOfBranches =()=> {
    const [data,setData]=useState([]);
    const { pincode } = useParams()
    useEffect(() => {
        async function fetchData() {
          const data = await fetch(
            "https://scavengerhunt-backend.herokuapp.com/findPincode/"+pincode,
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
      }, [pincode]); 
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
            }>List Of Serving Branches</h1>
           {
              
               data.length !=0 ? data.map(d=>{
                return(   <div>
                       <Branch {...d}/>
                    </div>
                )
               }):<div>
                    <h1>"No Branch is Serving your Area!!"</h1>
                   </div>
           
        }
        </div>
    )
}

export default ListOfBranches;