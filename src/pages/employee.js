import React, { Component } from "react";
import Table from "./../components/Table/index";
import API from "./../utils/API";

class Search extends Component {
  state = {
    results: [],
  };

  componentDidMount() {
    API.getEmployeeList()
      .then((res) => {
        this.setState({ results: res.data.results });
        console.log(this.state.results);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Table
          results= {this.state.results}
        />
      </div>
    );
  }
}

export default Search;
