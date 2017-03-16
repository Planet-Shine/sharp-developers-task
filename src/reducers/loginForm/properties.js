
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
        case defs.LOGIN_FORM_ENABLED:
            return state.set('enabled', action.payload);
        case defs.LOGIN_PENDING:
            return state.set('enabled', false);
        case defs.LOGIN_SUCCEED:
            return state.merge({
                enabled: true,
                status: action.payload.status,
                succeed: true
            });
        case defs.LOGIN_FAILED:
            return state.merge({
                succeed: false,
                enabled: true,
                status: action.payload.status,
                error: action.payload.entity
            });
        case defs.LOGIN_FORM_FIELD:
            return state.merge({
                error: null,
                status: null
            });
        case defs.LOGIN_FORM_REFRESH:
        case defs.ROUTER_STATE_CHANGE:
            return defaultState;
        default:
            return state;
    }
};

export default properties;