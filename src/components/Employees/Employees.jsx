import React, { Component } from 'react';
import "../../styles/Employees.css";
class Employees extends Component {
    render() {
        return (
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
                    <tbody  className="align-items-center">
                        <tr>
                            <td><img src="https://www.placecage.com/100/100"alt="Nic Cage" className="rounded"/></td>
                            <td>Nicolas Cage</td>
                            <td>(234) 234-2344</td>
                            <td>nic.cage@nictunes.com</td>
                            <td>02/20/1400</td>
                        </tr>
                        <tr>
                            <td><img src="https://www.placecage.com/100/100"alt="Nic Cage" className="rounded"/></td>
                            <td>Nicolas Cage</td>
                            <td>(234) 234-2344</td>
                            <td>nic.cage@nictunes.com</td>
                            <td>02/20/1400</td>
                        </tr><tr>
                            <td><img src="https://www.placecage.com/100/100"alt="Nic Cage" className="rounded"/></td>
                            <td>Nicolas Cage</td>
                            <td>(234) 234-2344</td>
                            <td>nic.cage@nictunes.com</td>
                            <td>02/20/1400</td>
                        </tr><tr>
                            <td><img src="https://www.placecage.com/100/100"alt="Nic Cage" className="rounded"/></td>
                            <td>Nicolas Cage</td>
                            <td>(234) 234-2344</td>
                            <td>nic.cage@nictunes.com</td>
                            <td>02/20/1400</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Employees;