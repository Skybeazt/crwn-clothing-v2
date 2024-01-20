import FormInput from "./../form-input/form-input.component.jsx";
import Button from "./../button/button.component.jsx";
import { useState, useEffect } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "./../../utils/firebase/firebase.utils.js";

import "./sign-up-form.styles.scss";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = function () {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = function (event) {
    const { name, value } = event.target;

    event.target.getAttribute("name") === "displayName" &&
      setFormFields({ ...formFields, [name]: value });
    event.target.getAttribute("name") === "email" &&
      setFormFields({ ...formFields, [name]: value });
    event.target.getAttribute("name") === "password" &&
      setFormFields({ ...formFields, [name]: value });
    event.target.getAttribute("name") === "confirmPassword" &&
      setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = function () {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async function (event) {
    event.preventDefault();
    const { email, password, confirmPassword } = formFields;

    if (!email || !password || password !== confirmPassword)
      return alert("Password, email or passwords do not match");

    try {
      // Creting user authentication
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(user);

      // Creating user document after authenticating
      const userDoc = await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();

      console.log(userDoc);
    } catch (error) {
      if (error.code === "auth/email-already-in-use")
        alert("Cannot create user, email already in use");
      else console.error("Failed to create user", error.message);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          label="Display Name"
        />
        <FormInput type="email" name="email" value={email} label="Email" />
        <FormInput
          type="password"
          name="password"
          value={password}
          label="Password"
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
