import React, { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";

import EmployeeList from "../components/EmployeeList";

import { loadEmployees } from "../store/employee-actions";


const EmployeesPage = () => {
  const { employees } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={employees}>
        {(loadedEmployees) => <EmployeeList list={loadedEmployees} />}
      </Await>
    </Suspense>
  );
};

export default EmployeesPage;

export function loader() {
  return defer({
    employees: loadEmployees(),
  });
}
