import classes from "./Login.module.css";
import Card from "../UI/Card";

import logo from "../../content/user.png";
import { useEffect, useState } from "react";

import { authActions } from "../../store/auth-store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const timeIntervel = setTimeout(() => {
      setFormIsValid(
        enteredEmail.includes("@") && enteredPassword.trim().length > 6
      );
    }, 500);

    // Cleaning useEffect function.
    return () => {
      clearTimeout(timeIntervel);
    };
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.login(enteredEmail));
    setEnteredEmail("");
    navigate("/dashboard");
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <img
            src={logo}
            alt="User logo"
            style={{ alignSelf: "center" }}
            width="120"
            height="120"
          />
          <h2 style={{ textAlign: "center" }}>Sign in</h2>
        </div>
        <div className={classes.control}>
          <input
            type="email"
            placeholder="Email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div className={classes.control}>
          <input
            type="password"
            placeholder="Password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <button className={classes.button} disabled={!formIsValid}>Sign in</button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
