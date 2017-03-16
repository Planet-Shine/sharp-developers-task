
import defs from 'defs/actionTypes';
import Immutable from 'immutable';

const defaultState = Immutable.fromJS({});

const transactions = (state=defaultState, action) => {
    switch (action.type) {
        case defs.TRANSACTION:
            return state;
        default:
            return state;
    }
};

export default transactions;