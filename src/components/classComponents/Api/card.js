import React, { Component } from "react";
import axios from "axios";
import { ListGroup } from "react-bootstrap";

class Cards extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      loading: false,
      error: null,
    };
  }

  fetchCards = () => {
    this.setState({ loading: true, error: null });
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        this.setState({ cards: res.data, loading: false });
      })
      .catch((error) => {
        this.setState({ error: "Failed to fetch data", loading: false });
        console.error("Error fetching cards:", error);
      });
  };

  render() {
    const { cards, loading, error } = this.state;
    return (
      <>
        <button onClick={this.fetchCards} disabled={loading}>
          Fetch cards
        </button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <div>
          {cards.map((card) => (
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
