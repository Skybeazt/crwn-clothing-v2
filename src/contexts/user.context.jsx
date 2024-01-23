import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  signOutUser,
  createUserDocumentFromAuth,
} from "./../utils/firebase/firebase.utils.js";

// As the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//
export const UserProvider = function ({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) createUserDocumentFromAuth(user);
      console.log(user);
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
