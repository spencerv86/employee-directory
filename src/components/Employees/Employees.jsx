import React, { Component } from "react";
import "../../styles/Employees.css";
import API from "../../utils/API";
import SearchBar from "../SearchBar/SearchBar";
import SingleEmployee from "../SingleEmployee/SingleEmployee";
import Tablehead from "../Tablehead/Tablehead";
class Employees extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
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
      return employee.email
        .toLowerCase()
        .includes(searchFor.toLowerCase());
    });
    this.setState({ filteredEmployees: retrieved });
  };

  handleBtnClick = (e) => {
    this.setState({ sort: !this.state.sort });
    console.log(e.currentTarget.id);
    let id = e.currentTarget.id;
    const sortMeth = (a, b) => {
      switch (id) {
        case "name":
          if (this.state.sort) {
            return b.name.first.localeCompare(a.name.first);
          } else {
            return a.name.first.localeCompare(b.name.first);
          }
        case "phone":
          if (this.state.sort) {
            return b.cell.localeCompare(a.cell);
          } else {
            return a.cell.localeCompare(b.cell);
          }
        case "email":
          if (this.state.sort) {
            return b.email.localeCompare(a.email);
          } else {
            return a.email.localeCompare(b.email);
          }
        case "DOB":
          if (this.state.sort) {
            return b.dob.date.localeCompare(a.dob.date);
          } else {
            return a.dob.date.localeCompare(b.dob.date);
          }
      }
    };
    const sorted = this.state.employees.sort(sortMeth);
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
