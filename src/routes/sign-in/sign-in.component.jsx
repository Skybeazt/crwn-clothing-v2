import {
  auth,
  SignInWithGooglePopup,
  createUserDocumentFromAuth,
} from "./../../utils/firebase/firebase.utils.js";

const SignIn = function () {
  const logGoogleUser = async () => {
    const { user } = await SignInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
