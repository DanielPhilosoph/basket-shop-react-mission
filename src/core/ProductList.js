import React from "react";
import ProductItem from "./ProductItem";
import "../styles/ProductList.css";

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.productlist = [
      "Apple",
      "Meat",
      "Fish",
      "Chocolate",
      "Cookies",
      "Coffee",
      "Milk",
    ];
    this.state = {
      addFunction: props.onAddClick,
    };
  }

  render() {
    const items = this.productlist.map((item) => {
      return (
        <div>
          <br />
          <ProductItem
            name={item}
            sign="+"
            class="plus"
            onclick={this.state.addFunction}
          />
        </div>
      );
    });
    return (
      <div className="mainList">
        <h3>
          <div>Products List</div>
        </h3>
        {items}
      </div>
    );
  }
}
