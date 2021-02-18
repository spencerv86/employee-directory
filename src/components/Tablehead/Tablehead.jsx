import React from "react";

const Tablehead = (props) => {
  return (
    <thead>
      <tr>
        <th scope="col">Image</th>
        <th scope="col">
          Name<i className="fa fa-fw fa-sort" onClick={props.handleBtnClick}></i>
        </th>
        <th scope="col">Phone</th>
        <th scope="col">Email</th>
        <th scope="col">DOB</th>
      </tr>
    </thead>
  );
};

export default Tablehead;
