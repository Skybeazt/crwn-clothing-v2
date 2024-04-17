import { createAction } from "./../../utils/reducer/reducer.utils.js";
import { USER_ACTIONS_TYPES } from "./user.types.js";

export const checkUserSession = function () {
  return createAction(USER_ACTIONS_TYPES.CHECK_USER_SESSION);
};

export const googleSignInStart = function () {
  return createAction(USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START);
};

export const signOutUser = function () {
  return createAction(USER_ACTIONS_TYPES.SIGN_OUT_USER_START);
};

export const signOutSuccess = function () {
  return createAction(USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS);
};

export const signOutFailed = function (error) {
  return createAction(USER_ACTIONS_TYPES.SIGN_OUT_FAILED, error);
};

export const emailSignInStart = function (email, password) {
  return createAction(USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START, {
    email,
    password,
  });
};

export const signUpStart = function (email, password, displayName) {
  return createAction(USER_ACTIONS_TYPES.SIGN_UP_START, {
    email,
    password,
    displayName,
  });
};

export const signUpSuccess = function (user, additionalDetails) {
  return createAction(USER_ACTIONS_TYPES.SIGN_UP_SUCCESS, {
    user,
    additionalDetails,
  });
};

export const signUpFailed = function (error) {
  return createAction(USER_ACTIONS_TYPES.SIGN_UP_FAILED, error);
};

export const signInSuccess = function (user) {
  return createAction(USER_ACTIONS_TYPES.SIGN_IN_SUCCESS, user);
};

export const signInFailed = function (error) {
  return createAction(USER_ACTIONS_TYPES.SIGN_IN_FAILED, error);
};
