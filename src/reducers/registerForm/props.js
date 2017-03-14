
import defs from 'defs';
import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
    enabled: true
});

const props = (state=defaultState, action) => {
    switch (action.type) {
        case defs.REGISTER_FORM_ENABLED:
            return state.set('enabled', action.payload);
        case defs.REGISTER_PENDING:
            return state.set('enabled', false);
        case defs.REGISTER_SUCCEED:
        case defs.REGISTER_FAILED:
            return state.set('enabled', true);
        default:
            return state;
    }
};

export default props;