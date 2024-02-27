import { Component } from "react";




class Subscribe extends Component{

    constructor(){
        super()
        this.state={
            isSubscribed:false
        }
    }
    handlesubscribe=()=>{
this.setState({
    isSubscribed:! this.state.isSubscribed
})
    }
    render(){
        return(
            <div>{
                this.state.isSubscribed? <h1>Welcome User to youtube channel </h1>:null
            }
            <br></br>
           <button onClick={this.handlesubscribe}>Subscribe{this.state.isSubscribed?"un subscribes":"please subscribe"}</button>
                
            </div> 
        )
    }
}
export default Subscribe