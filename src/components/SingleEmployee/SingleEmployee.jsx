import React from "react";
import Employees from "../Employees/Employees";

const SingleEmployee = ({ empList }) => {
  console.log(empList);
  return (
    <tr key={empList.id.value}>
      <td>
        <img
          src={empList.picture.thumbnail}
          alt="Nic Cage"
          className="rounded"
        />
      </td>
      <td>{empList.name.first + " " + empList.name.last}</td>
      <td>{empList.cell}</td>
      <td>{empList.email}</td>
      <td>{empList.dob.date.substring(0, 10)}</td>
    </tr>
  );
};

export default SingleEmployee;
