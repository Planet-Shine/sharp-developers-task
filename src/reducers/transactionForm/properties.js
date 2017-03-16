
import defs from 'defs/actionTypes';
import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
    succeed: false,
    error: null,
    enabled: true,
    status: null
});

const properties = (state=defaultState, action) => {
    switch (action.type) {
        case defs.TRANSACTION_FORM_ENABLED:
            return state.set('enabled', action.payload);
        case defs.TRANSACTION_PENDING:
            return state.set('enabled', false);
        case defs.TRANSACTION_SUCCEED:
            return state.merge({
                enabled: true,
                status: action.payload.status,
                succeed: true
            });
        case defs.TRANSACTION_FAILED:
            return state.merge({
                enabled: true,
                status: action.payload.status,
                error: action.payload.entity
            });
        case defs.TRANSACTION_FORM_DELETE_ERRORS:
            return state.merge({
                succeed: false,
                error: null,
                status: null
            });
        case defs.TRANSACTION_FORM_REFRESH:
            return defaultState;
        case defs.ROUTER_STATE_CHANGE:
            return defaultState;
        default:
            return state;
    }
};

export default properties;