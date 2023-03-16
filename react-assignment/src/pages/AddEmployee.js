import EmployeeForm from "../components/EmployeeForm";
const AddEmployee = (props) => {
  const addEmployeeHandler = async (dataObj) => {
    await fetch(
      "https://react-http-3514d-default-rtdb.firebaseio.com/employees.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: dataObj,
        }),
      }
    );
  };
  return <EmployeeForm onSendRequest={addEmployeeHandler} method="post" empId="" />;
};

export default AddEmployee;
