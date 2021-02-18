import React, { Component } from "react";
import "../../styles/SearchBar.css";

const SearchBar = (props) => {
    return (
      <div className="row justify-content-center">
        <form>
          <div className="form-group">
            <input
              className="form control search-bar"
              type="text"
              placeholder="Search..."
              name="searchFor"
              onChange={props.onChange}
            />
          </div>
        </form>
      </div>
    );
  };


export default SearchBar;
