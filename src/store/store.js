import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const loggerMiddleware = function (store) {
  return function (next) {
    return function (action) {
      if (!action.type) return next(action);

      console.log("type :", action.type);
      console.log("payload :", action.payload);
      console.log("previous :", store.getState());

      next(action);
      console.log("next :", store.getState());
    };
  };
};

const middleWares = [loggerMiddleware];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
