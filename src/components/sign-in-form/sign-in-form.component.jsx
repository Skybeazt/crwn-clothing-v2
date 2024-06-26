import { useState } from "react";
import { useDispatch } from "react-redux";

import FormInput from "./../form-input/form-input.component.jsx";
import Button, { BUTTON_TYPE_CLASSES } from "./../button/button.component.jsx";

// import {
//   signInAuthUserWithEmailAndPassword,
//   SignInWithGooglePopup,
//   createUserDocumentFromAuth,
// } from "./../../utils/firebase/firebase.utils.js";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action.js";

import { SignUpContainer, ButtonsContainer } from "./sign-in-form.styles.jsx";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = function () {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = () => dispatch(googleSignInStart());

  const resetFormFields = function () {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async function (event) {
    event.preventDefault();

    try {
      dispatch(emailSignInStart(email, password));
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
    <SignUpContainer>
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
        <ButtonsContainer>
          <Button type="submit">SIGN IN</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            GOOGLE SIGN IN
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignInForm;
