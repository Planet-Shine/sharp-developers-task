
import defs from 'defs';
import Immutable from 'immutable';

const defaultState = Immutable.fromJS({});

const account = (state=defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default account;