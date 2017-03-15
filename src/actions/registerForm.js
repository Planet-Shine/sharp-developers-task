
import defs from 'defs/actionTypes';
import api from 'api';

export const registerForm = ({fields, errors}) => {
    return {
        type: defs.REGISTER_FORM,
        payload: {fields, errors}
    };
};

export const changeField = (field) => {
    return {
        type: defs.REGISTER_FORM_FIELD,
        payload: field
    };
};

export const deleteErrors = (fieldName) => {
    return {
        type: defs.REGISTER_FORM_DELETE_ERRORS,
        payload: fieldName
    };
};

export const enabled = (isEnabled) => {
    return {
        type: defs.REGISTER_FORM_ENABLED,
        payload: isEnabled
    };
};

export const refreshRegisterForm = () => {
    return {
        type: defs.REGISTER_FORM_REFRESH
    };
};

