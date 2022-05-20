import { applyMiddleware } from 'redux';
// import loggerMiddleware from './loggerMiddleware';
import thunk from 'redux-thunk';
export default applyMiddleware(thunk);
