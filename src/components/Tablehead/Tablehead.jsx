import React from "react";

const Tablehead = (props) => {
  return (
    <thead>
      <tr>
        <th scope="col">Image</th>
        <th scope="col">
          Name<i className="fa fa-fw fa-sort" id="name" onClick={props.handleBtnClick}></i>
        </th>
        <th scope="col">Phone<i className="fa fa-fw fa-sort" id="phone" onClick={props.handleBtnClick}></i></th>
        <th scope="col">Email<i className="fa fa-fw fa-sort" id="email" onClick={props.handleBtnClick}></i></th>
        <th scope="col">DOB<i className="fa fa-fw fa-sort" id="DOB" onClick={props.handleBtnClick}></i></th>
      </tr>
    </thead>
  );
};

export default Tablehead;
