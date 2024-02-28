import { Component } from "react";


class UpdatingPhase extends Component{
    state={
        // 1
        count:0
    }
    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    componentDidMount(){
        console.log("component did update")
    }
    // 4
    shouldComponentUpdate(){
        return true
    }
    static getDerivedStateFromProps(props,state){
        // return{favoritecolor:props.favcolor}
        console.log("getderivedfromprops")
    }
    // 2
    getSnapshotBeforeUpdate(prevProps,prevstate){
        console.log(prevstate,"previous state") 
    }
render(){
    // 3
    console.log("render")
    return(
        <>
        <h4>Hello</h4>
       <button onClick={this.increment}>increment{this.state.count}</button>
        </>
    )
}

}
export default UpdatingPhase