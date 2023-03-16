import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";
const EmployeeDetailsPage = (props) => {
  const params = useParams();
  let empId = "";
  if (params) {
    empId = params.empId;
  }
  const empData = useSelector((state) => state.auth.list);
  const employee = empData ? empData.filter((emp) => emp.id === empId)[0] : "";
  return <EmployeeForm method="put" employee={employee} empId={empId} />;
};

export default EmployeeDetailsPage;
