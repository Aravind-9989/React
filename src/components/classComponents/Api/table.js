import axios from "axios";
import { Component } from "react";

const tableStyle = {
  border: "2px solid black",
  borderCollapse: "collapse",
  padding: 10,
  textAlign: "center"
};

const headerStyle = {
  border: "2px solid black",
  borderCollapse: "collapse",
  padding: 10,
  textAlign: "center"
};

class Table extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  fetchData = () => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <>
        <button onClick={this.fetchData}>Fetch data</button>
        <table style={tableStyle}>
          <tr>
            <th style={headerStyle}>ID</th>
            <th style={headerStyle}>Title</th>
            <th style={headerStyle}>Image</th>
            <th style={headerStyle}>Price</th>
            <th style={headerStyle}>Count</th>
          </tr>
          {this.state.data.map((eachObject) => {
            return (
              <tr key={eachObject.id}>
                <td style={headerStyle}>{eachObject.id}</td>
                <td style={headerStyle}>{eachObject.title}</td>
                <td style={headerStyle}>
                  <img src={eachObject.image} alt={eachObject.title} />
                </td>
                <td style={headerStyle}>{eachObject.price}</td>
                <td style={headerStyle}>{eachObject.count}</td>
              </tr>
            );
          })}
        </table>
      </>
    );
  }
}

export default Table;
