
import defs from 'defs/actionTypes';

export const loginForm = ({fields, errors}) => {
    return {
        type: defs.LOGIN_FORM,
        payload: {fields, errors}
    };
};

export const changeField = (field) => {
    return {
        type: defs.LOGIN_FORM_FIELD,
        payload: field
    };
};

export const deleteErrors = (fieldName) => {
    return {
        type: defs.LOGIN_FORM_DELETE_ERRORS,
        payload: fieldName
    };
};

export const enabled = (isEnabled) => {
    return {
        type: defs.LOGIN_FORM_ENABLED,
        payload: isEnabled
    };
};


export const refreshLoginForm = () => {
    return {
        type: defs.LOGIN_FORM_REFRESH
    };
};