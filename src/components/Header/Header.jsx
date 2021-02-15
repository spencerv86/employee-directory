import React, { Component } from "react";
import "../../styles/Header.css"

class Header extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid text-light" id="header">
          <div className="container" >
            <h1 className="display-4 text-center" id="jumbo-text">Employee Directory</h1>
            <p className="lead text-center">
              Click on the categories to sort by heading or use the search box
              to narrow your results!
            </p>
          </div>
        </div>
        <div id="add-line"></div>
      </div>
    );
  }
}

export default Header;
