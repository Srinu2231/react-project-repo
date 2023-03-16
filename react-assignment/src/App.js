import React from "react";
import {} from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ErrorPage from "./pages/Error";
import Login from "./components/Login/Login";
import DashboardPage from "./pages/Dashboard";
import EmployeeDashBoardPage from "./pages/EmployeeDashBoard";
import EmployeesPage, { loader as employeesLoader } from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import EmployeeDetailsPage from "./pages/EmployeeDetails";
import { action as addUpdateAction } from "./components/EmployeeForm";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "login", element: <Login /> },
      { path: "dashboard", element: <DashboardPage /> },
      {
        path: "employees",
        element: <EmployeeDashBoardPage />,
        children: [
          { index: true, element: <EmployeesPage />, loader: employeesLoader },
          {
            path: ":empId/edit",
            id: "event-detail",
            element: <EmployeeDetailsPage />,
            action: addUpdateAction,
          },
          {
            path: "new",
            element: <AddEmployee />,
            action: addUpdateAction,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
