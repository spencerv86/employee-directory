import React, { Component } from "react";
import "../../styles/Employees.css";
import API from "../../utils/API";
import SearchBar from "../SearchBar/SearchBar";
import SingleEmployee from "../SingleEmployee/SingleEmployee";
import Tablehead from "../Tablehead/Tablehead";
class Employees extends Component {
  state = {
    employees: [],
    filteredEmployees: []
  };

  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = () => {
    API.getEmployees()
      .then((res) =>
        this.setState({
          employees: res.data.results,
          filteredEmployees: res.data.results,
        })
      )
      .catch((err) => {
        if (err) throw err;
      });
  };

  handleInputChange = (e) => {
    const searchFor = e.target.value;
    const retrieved = this.state.employees.filter((employee) => {
      return employee.name.first
        .toLowerCase()
        .includes(searchFor.toLowerCase());
    });
    console.log(retrieved);
    this.setState({ filteredEmployees: retrieved });
  };

  handleBtnClick = (e) => {
    this.setState({ sort: !this.state.sort });
    const compare = (a,b) => {
        if (this.state.sort) {
            return b.name.last.localeCompare(a.name.last);
        } else {
            return a.name.last.localeCompare(b.name.last);
        }
    };
    const sorted = this.state.employees.sort(compare);
    this.setState({ filteredEmployees: sorted });
  };

  render() {
    return (
      <div>
        <SearchBar
          value={this.state.searchFor}
          onChange={this.handleInputChange}
        />
        <div className="container">
          <table className="table table-striped table-dark">
            <Tablehead handleBtnClick={this.handleBtnClick} />
            <tbody className="align-items-center">
              {this.state.filteredEmployees.map((employee) => {
                return (
                  <SingleEmployee empList={employee} key={employee.id.value} />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Employees;
