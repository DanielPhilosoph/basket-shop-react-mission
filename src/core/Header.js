import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { MDBInput } from "mdbreact";
import "../styles/Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.query = "";
  }

  getQuery = () => {
    this.forceUpdate();
    let searchInput = document.getElementById("search");
    if (searchInput) {
      return searchInput.value;
    }
    return "";
  };
  onKeyPressSearch = () => {
    let query = this.getQuery();
    this.props.renderFunc(query);
  };

  render() {
    return (
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://images2.alphacoders.com/726/thumb-1920-726739.png')",
          height: 250,
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}>
          <div className="d-flex justify-content-center align-items-center">
            <div className="text-white">
              <h1 className="mb-3">Welcome to Basket Shop!</h1>
              <h5 className="mb-3">
                Buy the most quality products in the market!
              </h5>
              <MDBInput
                id="search"
                hint="Search..."
                type="text"
                outline
                size="sm"
                className="searchInput"
                onChange={this.onKeyPressSearch}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
