
import defs from 'defs/actionTypes';
import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
    idToken: null,
    loggedIn: false
});

const account = (state=defaultState, action) => {
    switch (action.type) {
        case defs.LOGIN_SUCCEED:
            state = state.set('idToken', action.payload);
            if (action.payload) {
                state = state.set('loggedIn', true);
            }
            return state;
        default:
            return state;
    }
};

export default account;