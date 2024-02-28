const { Component } = require("react");






class Unmounting extends Component{
    state={
        ischildVisible:false
    }
    childHandler=()=>{
        this.setState(
            {
                ischildVisible:!this.state.ischildVisible
            }
        )
    }
    render(){
        return(
            <>
            <h2>Unmounting component</h2>
            <button onClick={this.childHandler}>control the child</button>
            {
   this.state.ischildVisible
    ?
    <Child/>
    :
    <h3>No child found</h3>
}
            </>
        )
    }
}
export default Unmounting

class Child extends Component{
    componentWillUnmount(){
        alert("i am removed form dom")
    }
    render(){
        return(
            <>
            <h1>I am child visible</h1>
            </>
        )
    }
}  