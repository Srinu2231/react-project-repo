import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import AuthContext from "../../store/auth-context";

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals App</h1>
        {!authCtx.isLoggedIn && (
          <NavLink
            to="/"
            className={"btn-rounded"}
            style={{
              marginLeft: "-40rem",
            }}
          >
            Home
          </NavLink>
        )}
        {authCtx.isLoggedIn && <Navigation />}
        {!authCtx.isLoggedIn && (
          <NavLink to="login" className="btn-rounded">
            Login
          </NavLink>
        )}
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Meals Image" />
      </div>
    </React.Fragment>
  );
};

export default Header;
