import React, { Component } from "react";
import Container from "../components/Container";
import SearchBar from "../components/SeachBar";
import Table from "../components/Table/index";
import API from "../utils/API";

class Search extends Component {
  state = {
    search: "",
    results: [],
    filtered: []
  };

  componentDidMount() {
    API.getEmployeeList()
      .then((res) => {
        this.setState({ results: res.data.results });
      })
      .catch((err) => console.log(err));
  }

  handleInputChange = (event) => {
      let search= event.target.value.toLowerCase();
      let employees= this.state.results;
      employees= employees.filter(employee => {
        let first= employee.name.first.toLowerCase();
        let last= employee.name.last.toLowerCase();
        let email= employee.email.toLowerCase();
        let phone= employee.phone;

        if(first.includes(search)){
            return first.includes(search)
        }else if(last.includes(search)){
            return last.includes(search)
        }else if(email.includes(search)){
            return email.includes(search)
        }else if(phone.includes(search)){
            return phone.includes(search)
        } 

        });
        
      
    this.setState({ filtered: employees });
    
  };

  render() {
    return (
      <div>
        <Container>
          <SearchBar
            handleInputChange={this.handleInputChange}
          />
          <Table results= {this.state.filtered.length? this.state.filtered : this.state.results} />
        </Container>
      </div>
    );
  }
}

export default Search;
