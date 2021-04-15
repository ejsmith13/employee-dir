import React, { Component } from "react";
import Container from "../components/Container";
import SearchBar from "../components/SeachBar";
import Table from "../components/Table/index";
import API from "../utils/API";
import Button from "../components/Button";

class Search extends Component {
  state = {
    search: "",
    results: [],
    filtered: [],
    order: "ascending",
  };

  componentDidMount() {
    API.getEmployeeList()
      .then((res) => {
        this.setState({ results: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
    let search = event.target.value.toLowerCase();
    let employees = this.state.results;
    employees = employees.filter((employee) => {
      let first = employee.name.first.toLowerCase();
      let last = employee.name.last.toLowerCase();
      let email = employee.email.toLowerCase();
      let phone = employee.phone;

      if (first.includes(search)) {
        return first.includes(search);
      } else if (last.includes(search)) {
        return last.includes(search);
      } else if (email.includes(search)) {
        return email.includes(search);
      } else if (phone.includes(search)) {
        return phone.includes(search);
      }
    });

    this.setState({ filtered: employees });
  };

  handleLast = () => {
    console.log("Click");
    console.log();
    let people = this.state.results;
    let A;
    let B;
    if (this.state.order === "ascending") {
      this.setState({ order: "descending" });
      const descending = people.sort(function (a, b) {
        A = a.name.last;
        B = b.name.last;
        return A < B ? -1 : A > B ? 1 : 0;
      });
      this.setState({ results: descending });

    } else if (this.state.order === "descending") {
      this.setState({ ...this.state, order: "ascending" });
      const ascending = people.sort(function (a, b) {
        A = a.name.last;
        B = b.name.last;
        return A < B ? 1 : A > B ? -1 : 0;
      });
      this.setState({ results: ascending });
    }
  };

  handleFirst = () => {
    console.log("Click");
    console.log();
    let people = this.state.results;
    let A;
    let B;
    if (this.state.order === "ascending") {
      this.setState({ order: "descending" });
      const descending = people.sort(function (a, b) {
        A = a.name.first;
        B = b.name.first;
        return A < B ? -1 : A > B ? 1 : 0;
      });
      this.setState({ results: descending });

    } else if (this.state.order === "descending") {
      this.setState({ ...this.state, order: "ascending" });
      const ascending = people.sort(function (a, b) {
        A = a.name.first;
        B = b.name.first;
        return A < B ? 1 : A > B ? -1 : 0;
      });
      this.setState({ results: ascending });
    }
  };

  render() {
    return (
      <div>
        <Container>
          <SearchBar handleInputChange={this.handleInputChange} />
          <Table
            results={
              this.state.filtered.length
                ? this.state.filtered
                : this.state.results
            }
            handleLast={this.handleLast}
            handleFirst={this.handleFirst}
          />
        </Container>
      </div>
    );
  }
}

export default Search;
