import React from "react";
import CartItem from "./CartItem";

import "../styles/CartList.css";

export default class CartList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartlist: props.cartlist,
      clear: props.clear,
    };
  }

  clearItems = () => {
    this.state.clear();
  };

  render() {
    let items = this.props.cartlist;
    if (this.props.cartlist.length !== 0) {
      items = items.filter((item) => {
        return (
          this.props.query === "" ||
          item.name.toLowerCase().includes(this.props.query)
        );
      });
      items = items.map((item) => {
        return (
          <div>
            <br />
            <CartItem name={item.name} count={item.count} />
          </div>
        );
      });
    } else {
      items = <div className="empty">No Products Selected</div>;
    }
    return (
      <div className="mainList">
        <h3>
          <div>
            Cart List
            <i className="del" onClick={this.clearItems}>
              🗑
            </i>
          </div>
        </h3>
        {items}
      </div>
    );
  }
}
