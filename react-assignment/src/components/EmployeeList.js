import classes from "./EmployeeList.module.css";

import { json, Link } from "react-router-dom";

import editicon from "../content/edit.png";
import deleteicon from "../content/delete_icon.png";

import { authActions } from "../store/auth-store";
import { useDispatch } from "react-redux";

const EmployeeList = (props) => {
  const dispacth = useDispatch();
  const empData = props.list;
  dispacth(authActions.storeEmployeeData(empData));
  const removeHandler = async (empId) => {
    const updatedData = empData.filter((emp) => emp.id !== empId);
    const response = await fetch(
      "https://react-http-8e630-default-rtdb.firebaseio.com/employees.json",
      {
        method: "PUT",
        body: JSON.stringify(updatedData),
      }
    );

    if (response.status === 422) {
      return response;
    }

    if (!response.ok) {
      throw json({ message: "Could not save employee data." }, { status: 500 });
    }
  };

  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Middle Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Contact No</th>
          <th>Email</th>
          <th>PAN Card</th>
          <th>DOB</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {empData.map((item) => (
          <tr key={item.id}>
            <td>{item.FirstName}</td>
            <td>{item.MiddleName}</td>
            <td>{item.LastName}</td>
            <td>{item.Gender}</td>
            <td>{item.ContactNo}</td>
            <td>{item.Email}</td>
            <td>{item.PAN}</td>
            <td>{item.DOB}</td>
            <td>{item.Address}</td>
            <td>
              <Link to={`${item.id}/edit`}>
                <img src={editicon} alt="Edit" height="30" width="30" />
              </Link>
            </td>
            <td>
              <a href="" onClick={removeHandler.bind(null, item.id)}>
                <img src={deleteicon} alt="Delete" height="30" width="30" />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
