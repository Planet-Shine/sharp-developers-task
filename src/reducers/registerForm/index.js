
import { combineReducers } from 'redux';
import fields from './fields';
import errors from './errors';
import props from './props';

export default combineReducers({
    fields,
    errors,
    props
});
