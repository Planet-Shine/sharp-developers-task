
import { combineReducers } from 'redux';
import fields from './fields';
import errors from './errors';
import properties from './properties';

export default combineReducers({
    fields,
    errors,
    properties
});