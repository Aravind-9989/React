import { useEffect, useState } from "react"


const Useeffect3 =()=>{
    const [count,setcount]=useState(0)

    useEffect(()=>{
       DomManipulation()
    },[])

    const DomManipulation=()=>{
document.title=`Current count ${count}`;
    }

    return(
        <>
<h2>Use effect</h2>
<h3>Current count:{count}</h3>
<button onClick={()=>setcount(count+1)}>Increment</button>
        </>
    )
}
export default Useeffect3