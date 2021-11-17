import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./core/Navbar";
import Header from "./core/Header";
import Body from "./core/Body";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.query = "";
  }
  renderAll = (myQuery) => {
    this.query = myQuery;
    this.forceUpdate();
  };

  render() {
    return (
      <React.StrictMode>
        <Navbar />
        <Header getquery={this.query} renderFunc={this.renderAll} />
        <Body query={this.query} />
      </React.StrictMode>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
