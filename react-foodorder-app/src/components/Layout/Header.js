import React, { useContext } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import AuthContext from "../../store/auth-context";

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals App</h1>
        {authCtx.isLoggedIn && <HeaderCartButton onClick={props.onShowCart} />}
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Meals Image" />
      </div>
    </React.Fragment>
  );
};

export default Header;
