
import { combineReducers } from 'redux';
import fields from './fields';
import errors from './errors';
import properties from './properties';
import filteredUsers from './filteredUsers';

export default combineReducers({
    filteredUsers,
    fields,
    errors,
    properties
});
