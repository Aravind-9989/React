

import Header from "../Navigation-routing/header"
import Example from "../components/functionalComponents/hooks/usecallback/Example"
import Example1Parent from "../components/functionalComponents/hooks/usecallback/Example2"
import ProfileExample from "../components/functionalComponents/hooks/usecallback/callback"
import Example1 from "../components/functionalComponents/hooks/usememo/Example1"
import UsememoExample from "../components/functionalComponents/hooks/usememo/Memo"
import Usereducer from "../components/functionalComponents/hooks/usereducer"








const profile =()=>{
    return(
        <>
            <Header/>
        <h1>profile</h1>
        {/* <Usereducer/> */}
        {/* <UsememoExample/> */}
        {/* <ProfileExample/> */}
        {/* <Example1/> */}
        {/* <Example/> */}
        <Example1Parent/>
        </>
        
    )
}
export default profile