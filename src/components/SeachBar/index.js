import React from "react";
import "./style.css";

function SearchBar(props) {
  return (
    <form className="search">
      <div className="form-group">
          <label>Search Employees</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="employee"
          list="employees"
          type="text"
          className="form-control"
          id="searchEmp"
        />
      </div>
    </form>
  );
}

export default SearchBar;
