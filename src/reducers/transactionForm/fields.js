
import defs from 'defs/actionTypes';
import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
    name: '',
    amount: ''
});

const fields = (state=defaultState, action) => {
    switch (action.type) {
        case defs.TRANSACTION_FORM:
            return Immutable.fromJS(action.payload.fields);
        case defs.TRANSACTION_FORM_FIELD:
            return state.merge(action.payload);
        case defs.TRANSACTION_SUCCEED:
            return state.map(value => ''); // Очищаем форму по успешной отправке.
        case defs.TRANSACTION_FORM_REFRESH:
            return defaultState;
        case defs.ROUTER_STATE_CHANGE:
            return defaultState;
        default:
            return state;
    }
};

export default fields;