import { useEffect } from "react";

const Useeffect4=()=>{
    useEffect(()=>{
        window.addEventListener("mousemove",callbackFunction)
    },[])
    const callbackFunction=(event)=>{
        console.log(event)
console.log(event.clientx)
console.log(event.clientY)
    }
    return(
        <>
        <h2>Hello</h2>
        </>
    )
}
export default  Useeffect4;