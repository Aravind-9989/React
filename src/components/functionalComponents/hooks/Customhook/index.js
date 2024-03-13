import { useState } from "react"
 const Usecounter=()=>{
    const[count,setcount]=useState(0)
    const handlecount=()=>{
        setcount(count+1)
    }
    return[count,handlecount]
    
 }
 export default Usecounter