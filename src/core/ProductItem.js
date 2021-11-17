import React from "react";
import "../styles/Item.css";
//import { Badge } from "react-bootstrap";

export default class ProductItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: props.name,
      onclick: props.onclick,
    };
  }

  buttonClick = () => {
    let name = this.state.itemName;
    this.state.onclick(name);
  };

  render() {
    return (
      <div className="item" onClick={this.buttonClick}>
        <div className="itemDiv">
          <button type="button" onClick={this.buttonClick} className="plus">
            +
          </button>
          <h6>{this.state.itemName}</h6>
        </div>
      </div>
    );
  }
}
