import { legacy_createStore as createStore } from 'redux';
import reducers from './reducers/index';
import middlewares from './middlewares/index';
export default createStore(reducers, middlewares);
