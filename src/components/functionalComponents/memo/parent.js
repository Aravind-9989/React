



import React, { useState } from 'react'
import Child from './child'

function Parent() {
    const[counter,setCounter]=useState(0)
  return (
    <div>parent

<h3>
    {counter}
</h3>
<button onClick={()=>setCounter(counter+1)}>count increment</button>
<Child/>

    </div>
  )
}

export default Parent