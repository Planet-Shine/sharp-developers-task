
import api from 'api';
import defs from 'defs/actionTypes';
import statusCodes, { successStatusCodes } from 'defs/httpStatusCodes';
import { logoutUser } from 'actions/transactions';

export const transactionFailed = ({status, entity}) => {
    return {
        type: defs.TRANSACTION_FAILED,
        payload: {status, entity}
    };
};

export const transactionSucceed = ({id, date, username, amount, balance}) => {
    return {
        type: defs.TRANSACTION_SUCCEED,
        payload: {id, date, username, amount, balance}
    };
};

export const transaction = ({name, amount}) => {
    return dispatch => {
        dispatch({
            type: defs.TRANSACTION_PENDING,
            payload: {name, amount}
        });
        api.createTransaction({name, amount}).then(
            ({ entity, status: { code }}) => {
                if (~successStatusCodes.indexOf(code)) {
                    let {trans_token:{id, date, username, amount, balance}={}} = entity;
                    dispatch(transactionSucceed({id, date, username, amount, balance}));
                } else {
                    if (statusCodes.Unauthorized === code) {
                        dispatch(logoutUser());
                    } else {
                        dispatch(transactionFailed({status: code, entity}));
                    }
                }
            },
            ({ entity, status: { code }}) => {
                dispatch(transactionFailed({status: code, entity}));
            }
        );
    };
};


export const transactionHistoryFailed = ({status, entity}) => {
    return {
        type: defs.TRANSACTION_HISTORY_FAILED,
        payload: {status, entity}
    };
};

export const transactionHistorySucceed = ({list}) => {
    return {
        type: defs.TRANSACTION_HISTORY_SUCCEED,
        payload: list
    };
};

export const selectTransaction = ({item, index}) => {
    return {
        type: defs.SELECT_TRANSACTION,
        payload: {item, index}
    };
};


export const transactionHistory = () => {
    return dispatch => {
        dispatch({
            type: defs.TRANSACTION_HISTORY_PENDING
        });
        api.transactionHistory().then(
            ({ entity, status: { code }}) => {
                if (~successStatusCodes.indexOf(code)) {
                    let {trans_token:list=[]} = entity;
                    dispatch(transactionHistorySucceed({list}));
                } else {
                    if (statusCodes.Unauthorized === code) {
                        dispatch(logoutUser());
                    } else {
                        dispatch(transactionHistoryFailed({status: code, entity}));
                    }
                }
            },
            ({ entity, status: { code }}) => {
                dispatch(transactionHistoryFailed({status: code, entity}));
            }
        );
    };
};