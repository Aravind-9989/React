import React, { Component } from "react";
import axios from "axios";
import { ListGroup } from "react-bootstrap";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      Cards: [],
    };
  }

  fetchCards = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        this.setState({ Cards: res.data });
      })
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <>
        <button onClick={this.fetchCards}>Fetch cards</button>
        <div>
          {this.state.Cards.map((card) => (
            <div key={card.id} style={{ width: "18rem", margin: "10px" }}>
              <ListGroup>
                <ListGroup.Item>{card.title}</ListGroup.Item>
                <ListGroup.Item>{card.price}</ListGroup.Item>
                <ListGroup.Item>{card.description}</ListGroup.Item>
              </ListGroup>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default Cards;
