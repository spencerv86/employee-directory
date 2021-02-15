import React, { Component } from "react";
import "../../styles/SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="row justify-content-center">
        <form>
          <div className="form-group">
            <input
              className="form control search-bar"
              type="text"
              placeholder="Search..."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
