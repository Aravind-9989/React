
import axios, { Axios } from "axios";
import React, { useState, useEffect } from "react";

function Productss() {
  const [count, setcount] = useState(1);
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetchdata();
  }, [count]);

  const handleIncreament=()=>{
    setcount(count+1);
}

  const fetchdata = async () => {
    const result = await axios.get("https://dummyjson.com/products/${count}");
    setdata(result.data.products);
    console.log(data);
  };
  

  return (
    <>
    <h1>Count {count}</h1>
    <button onClick={handleIncreament}>Increament</button>
    <ul>
    {
      
     data.map((items)=>{
        return(
            <li>{items.title}</li>
        )
     })
    }
    </ul>
</>
)
}

export default Productss;
