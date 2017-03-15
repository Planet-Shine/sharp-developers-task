
import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import account from './account';
import loginForm from './loginForm';
import registerForm from './registerForm';

export default combineReducers({
    routing: routerReducer,
    account,
    loginForm,
    registerForm
});