import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import { authActions } from "../store/auth-store";

const MainNavigation = (props) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <div>
        <nav>
          <ul className={classes.list}>
            {!isLoggedIn && (
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  end
                >
                  Home
                </NavLink>
              </li>
            )}

            <li>
              {isLoggedIn && (
                <NavLink
                  to="dashboard"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  Dashboard
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul className={classes.list}>
            {!isLoggedIn && (
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  Login
                </NavLink>
              </li>
            )}

            {isLoggedIn && (
              <li>
                <NavLink
                  to="/employees"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  Employee Section
                </NavLink>
              </li>
            )}

            {isLoggedIn && (
              <li>
                <a href="/" onClick={logoutHandler}>
                  Logout
                </a>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
