
import defs from 'defs/actionTypes';
import Immutable from 'immutable';

const defaultState = Immutable.fromJS([]);

const filteredUsers = (state=defaultState, action) => {
    switch (action.type) {
        case defs.TRANSACTION_FORM_FILTERED_USERS:
            return Immutable.fromJS(action.payload);
        case defs.ROUTER_STATE_CHANGE:
            return defaultState;
        default:
            return state;
    }
};

export default filteredUsers;