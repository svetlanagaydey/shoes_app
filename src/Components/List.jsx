import React from 'react';
import axios from "axios";
import Card from "./Card.jsx";

class List extends React.Component {

  constructor() {
    super();
    this.state = {
      cardsList: []
    };
  }

  componentDidMount = async () => {
    const response = await axios.get(
      "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
    );
    this.setState({ cardsList: response.data });
    console.log(this.state.cardsList[0].image_link)
  };

  printCards = async() => {
    if (this.state.cardsList.length > 0) {
      return (
        <div >
          {this.state.cardsList.map((card, ind) => {
            return <Card key={ind} name={card.image_link} />;
          })}
        </div>
      );
    }
  };
  test = () => {
    return <Card key='0' name={this.state.cardsList[0].image_link} />
  }
  
  render() {
    return (
      <div>
        <h1> Choose what you want to buy!</h1>
        {/* {this.test} */}
        {/* {this.printCards()} */}
      </div>
    )
  }
}

export default List;