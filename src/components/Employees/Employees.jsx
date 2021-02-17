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
    filter: "",
    sortMethod: "asc"
  };

  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = () => {
    API.getEmployees()
      .then((res) => this.setState({ employees: res.data.results }))
      .catch((err) => {
        if (err) throw err;
      });
  };

  handleInputChange= (e) => {
      this.setState({filter: e.target.value})
  };

  handleBtnClick = (e) => {
    this.setState({employees: this.state.employees.sort(function(a, b) {
        return a.email - b.value;
    })})
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <div className="container">
          <table className="table table-striped table-dark">
            <Tablehead handleBtnClick={this.handleBtnClick}/>
            <tbody className="align-items-center">
                {this.state.employees.map((employee) => {
                    return (
                        <SingleEmployee empList={employee} />
                    )
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Employees;
