
import defs from 'defs/actionTypes';
import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
    succeed: false,
    error: null,
    enabled: true,
    status: null,
    loaded: false,
    selectedIndex: null
});

const properties = (state=defaultState, action) => {
    switch (action.type) {
        case defs.TRANSACTION_HISTORY_PENDING:
            return state.merge({
                loaded: false,
                enabled: false
            });
        case defs.TRANSACTION_HISTORY_SUCCEED:
            return state.merge({
                enabled: true,
                status: action.payload.status,
                succeed: true,
                loaded: true
            });
        case defs.TRANSACTION_HISTORY_FAILED:
            return state.merge({
                succeed: false,
                loaded: false,
                enabled: true,
                status: action.payload.status,
                error: action.payload.entity
            });
        case defs.SELECT_TRANSACTION:
            return state.set('selectedIndex', action.payload.index);
        case defs.TRANSACTION_FORM_FIELD:
            return state.set('selectedIndex', null);
        case defs.LOGOUT:
            return defaultState;
        default:
            return state;
    }
};

export default properties;