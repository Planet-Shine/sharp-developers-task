
import defs from 'defs/actionTypes';

export const loginFormState = (state) => {
    return {
        type: defs.LOGIN_FORM_FIELDS,
        payload: state
    };
};