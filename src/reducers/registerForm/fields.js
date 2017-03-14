
import defs from 'defs';
import Immutable from 'immutable';

const defaultState = Immutable.fromJS({
    username: '',
    email: '',
    password1: '',
    password2: ''
});

const fields = (state=defaultState, action) => {
    switch (action.type) {
        case defs.REGISTER_FORM:
            return Immutable.fromJS(action.payload.fields);
        case defs.REGISTER_FORM_FIELD:
            return state.merge(action.payload);
        default:
            return state;
    }
};

export default fields;