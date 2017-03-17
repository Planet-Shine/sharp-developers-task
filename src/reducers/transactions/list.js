
import defs from 'defs/actionTypes';
import Immutable from 'immutable';

const defaultState = Immutable.fromJS([]);

const list = (state=defaultState, action) => {
    switch (action.type) {
        case defs.TRANSACTION_HISTORY_PENDING:
            return defaultState;
        case defs.TRANSACTION_HISTORY_SUCCEED:
            return Immutable.fromJS(action.payload);
        case defs.TRANSACTION_HISTORY_FAIL:
            return defaultState;
        case defs.TRANSACTION_SUCCEED:
            return state.push(Immutable.fromJS(action.payload));
        case defs.LOGOUT:
            return defaultState;
        default:
            return state;
    }
};

export default list;