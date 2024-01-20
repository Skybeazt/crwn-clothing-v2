import { useState } from "react";

import FormInput from "./../form-input/form-input.component.jsx";
import Button from "./../button/button.component.jsx";

import {
  signInAuthUserWithEmailAndPassword,
  SignInWithGooglePopup,
  createUserDocumentFromAuth,
} from "./../../utils/firebase/firebase.utils.js";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = function () {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    const { user } = await SignInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const resetFormFields = function () {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async function (event) {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect password");
          break;

        case "auth/user-not-found":
          alert("Email does not exist");
          break;

        default:
          console.error(error);
      }
    }
  };

  const handleChange = function (event) {
    const { name, value } = event.target;

    event.target.getAttribute("name") === "email" &&
      setFormFields({
        ...formFields,
        [name]: value.toLowerCase(),
      });

    event.target.getAttribute("name") === "password" &&
      setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span> Sign in with your email and password</span>
      <form onSubmit={handleSubmit} onChange={handleChange}>
        <FormInput label="Email" type="email" name="email" value={email} />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">SIGN IN</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            GOOGLE SIGN IN
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
