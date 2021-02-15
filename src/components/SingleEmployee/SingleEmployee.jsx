import React, { Component } from "react";

class SingleEmployee extends Component {
  render() {
    return (
      <tr>
        <td>
          <img
            src="https://www.placecage.com/100/100"
            alt="Nic Cage"
            className="rounded"
          />
        </td>
        <td>Nicolas Cage</td>
        <td>(234) 234-2344</td>
        <td>nic.cage@nictunes.com</td>
        <td>02/20/1400</td>
      </tr>
    );
  }
}

export default SingleEmployee;
