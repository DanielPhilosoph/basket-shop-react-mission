import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Body.css";
import ProductList from "./ProductList";
import CartList from "./CartList";
import { Container, Row, Col } from "react-bootstrap";

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = { cartlist: [], query: this.props.query };
  }

  Clear = () => {
    this.setState({ cartlist: [] });
  };

  addToCartList = (name) => {
    let carlistArray = this.state.cartlist;
    let updated = false;
    carlistArray.map((item) => {
      if (item.name === name) {
        item.count++;
        updated = true;
      }
      return item;
    });
    if (!updated) {
      carlistArray.push({ name: name, count: 1 });
    }
    this.setState({ cartlist: carlistArray });
  };

  render() {
    return (
      <div id="body">
        <br />
        <br />
        <Container bg={"danger"}>
          <Row>
            <Col md={4}>
              <ProductList onAddClick={this.addToCartList} />
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <CartList
                query={this.props.query}
                clear={this.Clear}
                cartlist={this.state.cartlist}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Body;
