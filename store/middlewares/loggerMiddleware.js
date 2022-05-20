const loggerMiddleware = (store) => (next) => (action) => {
  console.log('dispatching', action.type);
  let result = next(action);
  return result;
};

export default loggerMiddleware;
