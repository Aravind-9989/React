
import { useContext } from "react"
import Header from "../Navigation-routing/header"
import ComponentA from "../components/functionalComponents/context/componentA"
import { userdetails } from "../Navigation-routing/Navigation"
import Usecounter from "../components/functionalComponents/hooks/Customhook"


const About =()=>{
let globalInfo=useContext(userdetails)
const[count,setcount]=Usecounter()


console.log(globalInfo)


const ChangeName=()=>{
    globalInfo.ChangeName("hello")
}
    return(
        <>
         <Header/>
        <h1>About</h1>
        <h3>i am form navigation js,global Info {globalInfo.username}</h3>
        {/* <button onClick={ChangeName}>Change Name</button> */}
        {/* <ComponentA/> */}
        <h4>{count}</h4>
        <button onClick={setcount}>Increment</button>
        </>
        
    )
}
export default About

