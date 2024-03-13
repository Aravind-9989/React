
    import { useNavigate } from "react-router-dom"
import Header from "../Navigation-routing/header"





const Invalid =()=>{
   const navigate= useNavigate()
    const handleroute=()=>{
        navigate('/')
    }
    return(
        <>
            <Header/>
        <h1>404 Error</h1>
        <button onClick={handleroute}>Go to home</button>
        </>
        
    )
}
export default Invalid