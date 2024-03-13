
import React, { Component, useState } from "react"
import ComponentB from "./componentB"



function    ComponentA(){
    const[name,SetName]=useState("Jagadheesh")

    return(
        <div>
       <ComponentB name={name} />
        </div>
    )
}
export default ComponentA