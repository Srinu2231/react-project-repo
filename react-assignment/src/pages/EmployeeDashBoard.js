import React from "react";
import {Outlet} from 'react-router-dom'
import EmployeeNavigation from "../components/EmployeeNavigation";

const EmployeeDashBoardPage = () => {
  return (
    <>
      <EmployeeNavigation />
      <Outlet />
    </>
  );
};

export default EmployeeDashBoardPage;
