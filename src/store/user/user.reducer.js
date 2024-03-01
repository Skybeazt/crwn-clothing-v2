import { USER_ACTIONS_TYPES } from "./user.types";
const INITIAL_USER_STATE = { currentUser: null };

export const userReducer = function (state = INITIAL_USER_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTIONS_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload };

    default:
      return state;
  }
};

// export const userSlice = createSlice({
//   name: "user",
//   INITIAL,
//   reducers: {},
// });
