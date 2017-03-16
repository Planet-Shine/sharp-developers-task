
import defs from 'defs/actionTypes';
import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
    email: '',
    password: ''
});

const fields = (state=defaultState, action) => {
    switch (action.type) {
        case defs.LOGIN_FORM:
            return Immutable.fromJS(action.payload.fields);
        case defs.LOGIN_FORM_FIELD:
            return state.merge(action.payload);
        case defs.LOGIN_SUCCEED:
            return state.map(value => ''); // Очищаем форму по успешной отправке.
        case defs.LOGIN_FORM_REFRESH:
        case defs.ROUTER_STATE_CHANGE:
            return defaultState;
        default:
            return state;
    }
};

export default fields;