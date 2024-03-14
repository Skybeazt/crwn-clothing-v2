export const loggerMiddleware = function (store) {
  return function (next) {
    return function (action) {
      if (!action.type) return next(action);

      console.log('Action type "', action.type);
      console.log("Payload :", action.payload);
      console.log("Prev state", store.getState());
      next(action);
      console.log("Next state :", store.getState());
    };
  };
};
