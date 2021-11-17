import React from "react";
import "../styles/Item.css";
//import { Badge } from "react-bootstrap";

export default class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: props.name,
      count: props.count,
    };
  }

  onMinusClick = () => {
    const item = document.querySelector(`h6[data-item=${this.state.itemName}]`);
    if (item.classList.contains("strike")) {
      item.classList.add("unstrike");
      item.classList.remove("strike");
    } else {
      item.classList.add("strike");
      item.classList.remove("unstrike");
    }
  };

  render() {
    return (
      <div className="item">
        <div className="itemDiv">
          <button type="button" onClick={this.onMinusClick} className="minus">
            -
          </button>
          <h6 data-item={this.state.itemName}>{this.state.itemName}</h6>
        </div>
        <div>
          <h5>{this.props.count}</h5>
        </div>
      </div>
    );
  }
}
