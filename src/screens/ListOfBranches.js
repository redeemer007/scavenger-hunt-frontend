import React, { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router-dom'
import Branch from "../components/Branch";

const ListOfBranches =()=> {
    const [data,setData]=useState([]);
    const { pincode } = useParams()
    useEffect(() => {
        async function fetchData() {
          const data = await fetch(
            "http://localhost:8082/findPincode/"+pincode,
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
        <div>
            <h1>List Of Serving Branches</h1>
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