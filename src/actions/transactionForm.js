
import defs from 'defs/actionTypes';
import api from 'api';
import { successStatusCodes } from 'defs/httpStatusCodes';

export const transactionForm = ({fields, errors}) => {
    return {
        type: defs.TRANSACTION_FORM,
        payload: {fields, errors}
    };
};

export const changeField = (field) => {
    return {
        type: defs.TRANSACTION_FORM_FIELD,
        payload: field
    };
};

export const deleteErrors = (fieldName) => {
    return {
        type: defs.TRANSACTION_FORM_DELETE_ERRORS,
        payload: fieldName
    };
};

export const enabled = (isEnabled) => {
    return {
        type: defs.TRANSACTION_FORM_ENABLED,
        payload: isEnabled
    };
};

export const refreshTransactionForm = () => {
    return {
        type: defs.TRANSACTION_FORM_REFRESH
    };
};

export const transactionFormFilteredUsers = ({filteredUsers}) => {
    return {
        type: defs.TRANSACTION_FORM_FILTERED_USERS,
        payload: filteredUsers
    };
};

export const filterUsers = ({filter}) => {
    return dispatch => {
        api.filteredUserList({filter}).then(
            ({ entity, status: { code }}) => {
                if (~successStatusCodes.indexOf(code)) {
                    dispatch(transactionFormFilteredUsers({filteredUsers: entity}));
                } else {
                    dispatch(transactionFormFilteredUsers({filteredUsers: []}));
                }
            },
            ({ entity, status: { code }}) => {
                dispatch(transactionFormFilteredUsers({filteredUsers: []}));
            }
        );
    };
};

