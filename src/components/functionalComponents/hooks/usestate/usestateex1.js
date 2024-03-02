
import { useState } from "react"

const UseStateExample =()=>{
   const[currentcount,setCurrentCount]=useState(0)
   const HandleIncrement=(value)=>{
// console.log(,currentcount,"currentcount")
setCurrentCount(currentcount+1)
   }
const Handledecrement=()=>{
   setCurrentCount(currentcount-1)
}
const Handlereset=()=>{
   setCurrentCount(0)
}
return( 
    <>
  <h2>{currentcount}</h2>
<button onClick={()=>HandleIncrement(1)}>Increment</button>
<button onClick={()=>Handledecrement(1)}>Decrement</button>
<button onClick={Handlereset}>Reset</button>
    </>
)
}
export default UseStateExample



// useState(intialstate)
// const [currentstate,updatefunction]=useState(0)

