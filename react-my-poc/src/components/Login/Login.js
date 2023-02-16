import React, { useContext, useEffect, useState } from "react";
import {redirect, useNavigate} from 'react-router-dom'

import Card from "../UI/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";
import useInput from "../../hooks/use-input";

const Login = (props) => {
  const navigate = useNavigate();
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: validateEmailHandler,
    reset: resetEmailInput,
  } = useInput(value => value.includes("@"));

  const {
    value: enteredPassword,
    isValid: passwordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: validatePasswordHandler,
    reset: resetPasswordInput,
  } = useInput(value => value.trim().length > 6);


  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    const timeIntervel = setTimeout(() => {
      setFormIsValid(
        emailIsValid && passwordIsValid
      );
    }, 500);

    // Cleaning useEffect function.
    return () => {
      clearTimeout(timeIntervel);
    };
  }, [emailIsValid, passwordIsValid]);

  const authCtx = useContext(AuthContext);



  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(enteredEmail, enteredPassword);
    resetEmailInput();
    resetPasswordInput();
    navigate("/dashboard");
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-Mail"
          type="email"
          hasError={emailInputHasError}
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        {emailInputHasError && <p className={classes['error-text']}>E-Mail should not be an empty</p>}
        
        <Input
          id="password"
          label="Password"
          type="password"
          hasError={passwordInputHasError}
          value={enteredPassword}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
        {passwordInputHasError && <p className={classes['error-text']}>Password should not be an empty</p>}
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
