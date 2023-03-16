import { NavLink } from 'react-router-dom';

import classes from './EmployeeNavigation.module.css';

function EmployeeNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/employees"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              All Employees
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/employees/new"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Add Employee
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EmployeeNavigation;
