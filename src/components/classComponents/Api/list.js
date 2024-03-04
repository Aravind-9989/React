import { Component } from "react";
import axios from "axios";

class List extends Component {
  constructor() {
    super();
    this.state = {
      Table: []
    };
  }

  fetchList = () => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        this.setState({ Table: res.data });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <>
        <button onClick={this.fetchList}>Get Products</button>
        <ol>
          <li>Id</li>
          <li>Title</li>
          <li>Image</li>
          <li>Price</li>
          <li>Count</li>
        </ol>
        {this.state.Table.map((eachObject) => {
          return (
            <ol key={eachObject.id}>
              <li>{eachObject.id}</li>
              <li>{eachObject.title}</li>
              <li><img src={eachObject.image} alt={eachObject.title} /></li>
              <li>{eachObject.price}</li>
              <li>{eachObject.count}</li>
            </ol>
          );
        })}
      </>
    );
  }
}

export default List;

