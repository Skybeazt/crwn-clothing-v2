export const loggerMiddleware = function (store) {
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
