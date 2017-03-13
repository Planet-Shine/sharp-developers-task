
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import account from './account';

export default combineReducers({
    routing: routerReducer,
    account
});