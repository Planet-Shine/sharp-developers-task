
import defs from 'defs/actionTypes';
import Immutable from 'immutable';

const defaultState = Immutable.fromJS([]);

const errors = (state=defaultState, action) => {
    switch (action.type) {
        case defs.TRANSACTION_FORM:
            return Immutable.fromJS(action.payload.errors);
        case defs.TRANSACTION_FORM_DELETE_ERRORS:
            return state.filter(
                item => item.get('name') !== action.payload
            );
        case defs.TRANSACTION_FORM_REFRESH:
            return defaultState;
        case defs.ROUTER_STATE_CHANGE:
            return defaultState;
        default:
            return state;
    }
};

export default errors;