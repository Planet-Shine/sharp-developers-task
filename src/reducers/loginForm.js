
import defs from 'defs/actionTypes';
import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
    email: {
        value: ''
    },
    password: {
        value: ''
    }
});

const loginForm = (state=defaultState, action) => {
    switch (action.type) {
        case defs.LOGIN_FORM_FIELDS:
            return Immutable.fromJS(action.payload);
        default:
            return state;
    }
};

export default loginForm;