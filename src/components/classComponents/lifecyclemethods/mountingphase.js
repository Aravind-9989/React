import { Component } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/esm/Spinner";

class Mounting extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        axios.get("https://fakestoreapi.com/products")
            .then(response => {
                if (response.status === 200) {
                    this.setState({
                        products: response.data
                    });
                } else {
                    alert("Something is missing");
                }
            })
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.state.products);
        return (
            <>
                <h1>Product List</h1>
                {
                    this.state.products.length > 0 ?
                        this.state.products.map(eachObject => (
                            <h2 key={eachObject.id} >{eachObject.title}</h2>
                            
                        )) :
                  
                        <h4>No products found</h4>
                        
                }
            </>
        );
    }
}

export default Mounting;