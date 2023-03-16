import { Form, redirect, useNavigate } from "react-router-dom";
import classes from "./EmployeeForm.module.css";
import Card from "./UI/Card";
import { loadEmployees, sendRequest } from "../store/employee-actions";
const EmployeeForm = ({ method, employee, empId }) => {
  const navigate = useNavigate();

  const cancelHandler = (event) => {
    navigate("..");
  };

  return (
    <Card className={classes.form}>
      <Form method={method}>
        <div>
          <label htmlFor="fName">First Name</label>
          <input
            id="fName"
            name="fName"
            type="text"
            defaultValue={empId ? employee.FirstName : ""}
            required
          />
        </div>
        <div>
          <label htmlFor="mName">Middle Name</label>
          <input
            id="mName"
            name="mName"
            type="text"
            defaultValue={empId ? employee.MiddleName : ""}
          />
        </div>
        <div>
          <label htmlFor="lName">Last Name</label>
          <input
            id="lName"
            name="lName"
            type="text"
            defaultValue={empId ? employee.LastName : ""}
            required
          />
        </div>
        <div className={`${classes.radio}`}>
          <label>Gender</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="Male"
            defaultChecked={empId ? employee.Gender === "Male" : false}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="FeMale"
            defaultChecked={empId ? employee.Gender === "Female" : false}
          />
          <label htmlFor="female">Female</label>
        </div>
        <div>
          <label htmlFor="contactNo">Contact No</label>
          <input
            id="contactNo"
            name="contactNo"
            type="number"
            defaultValue={empId ? employee.ContactNo : ""}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            defaultValue={empId ? employee.Email : ""}
            required
          />
        </div>
        <div>
          <label htmlFor="pan">PAN</label>
          <input
            id="pan"
            name="pan"
            type="text"
            defaultValue={empId ? employee.PAN : ""}
            required
          />
        </div>
        <div>
          <label htmlFor="dob">DOB</label>
          <input
            id="dob"
            name="dob"
            type="date"
            defaultValue={empId ? employee.DOB : ""}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            cols="5"
            defaultValue={empId ? employee.Address : ""}
            required
          />
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={cancelHandler}>
            Cancel
          </button>
          <button>Save</button>
        </div>
      </Form>
    </Card>
  );
};

export default EmployeeForm;

export async function action({ request, params }) {
  const empId = params.empId ? params.empId : "";
  const method = request.method;
  const data = await request.formData();
  const dataObj = {
    id: empId ? empId : Math.random().toString(),
    FirstName: data.get("fName"),
    MiddleName: data.get("mName"),
    LastName: data.get("lName"),
    Gender: data.get("gender"),
    ContactNo: data.get("contactNo"),
    Email: data.get("email"),
    PAN: data.get("pan"),
    DOB: data.get("dob"),
    Address: data.get("address"),
  };

  const resData = await loadEmployees();
  let updatedEmpList = resData ? resData : [];

  const existingIndex = resData.findIndex((item) => item.id === empId);

  if (existingIndex && existingIndex !== -1) {
    updatedEmpList[existingIndex] = dataObj;
  }else{
    updatedEmpList.push(dataObj)
  }

  await sendRequest(method, updatedEmpList);

  return redirect("/employees");
}
