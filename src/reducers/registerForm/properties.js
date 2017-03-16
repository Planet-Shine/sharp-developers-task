
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
        case defs.REGISTER_FORM_ENABLED:
            return state.set('enabled', action.payload);
        case defs.REGISTER_PENDING:
            return state.set('enabled', false);
        case defs.REGISTER_SUCCEED:
            return state.merge({
                enabled: true,
                status: action.payload.status,
                succeed: true
            });
        case defs.REGISTER_FAILED:
            return state.merge({
                enabled: true,
                status: action.payload.status,
                error: action.payload.entity
            });
        case defs.REGISTER_FORM_DELETE_ERRORS:
            return state.merge({
                error: null,
                status: null
            });
        case defs.REGISTER_FORM_REFRESH:
        case defs.ROUTER_STATE_CHANGE:
            return defaultState;
        default:
            return state;
    }
};

export default properties;