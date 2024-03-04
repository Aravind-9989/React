import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Spinner } from "react-bootstrap"



const UseEffectEx2 =()=>{
    const [count,setcount]=useState(0)
    const [data,setdata]=useState(0)
    useEffect(()=>{
        // setTimeout(()=>{
        //     setcount(count)
        // })
        fetchdata()
    },)
    const fetchdata=async()=>{
       const result= await axios.get("https://dummyjson.com/products")
    //    console.log(result)
    setdata(result.data.products)
    }
    return(
        <>
    <h1>USe effect{count}</h1>
    <button onClick={()=>setcount(count+1)}>count</button>
    {
        data.length>0
        ?
        data.map(item=><h4>{item.title}</h4>)
        :
        <Spinner/>
    }
        </>
    )
}
export default UseEffectEx2