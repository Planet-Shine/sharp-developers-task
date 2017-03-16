
import api from 'api';
import defs from 'defs/actionTypes';
import { successStatusCodes } from 'defs/httpStatusCodes';

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
                    dispatch(transactionFailed({status: code, entity}));
                }
            },
            ({ entity, status: { code }}) => {
                dispatch(transactionFailed({status: code, entity}));
            }
        );
    };
};