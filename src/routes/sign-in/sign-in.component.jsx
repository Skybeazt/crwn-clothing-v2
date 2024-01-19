// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
import SignUpForm from "./../../components/sign-up-form/sign-up-form.component.jsx";

import {
  SignInWithGooglePopup,
  createUserDocumentFromAuth,
} from "./../../utils/firebase/firebase.utils.js";

const SignIn = function () {
  // useEffect(() => {
  //   const gettingRedirectedResult = async function () {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   };
  //   gettingRedirectedResult();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await SignInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
      {/* <button onClick={SignInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button> */}
    </div>
  );
};

export default SignIn;
