import React, { Component } from "react";
import "../../styles/Employees.css";
import API from "../../utils/API";
import SearchBar from "../SearchBar/SearchBar";
import SingleEmployee from "../SingleEmployee/SingleEmployee";
class Employees extends Component {
  state = {
    employees: [],
    filteredEmployees: [],
    filter: ""
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
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <div className="container">
          <table className="table table-striped table-dark">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
              </tr>
            </thead>
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
