
import api from 'api';
import defs from 'defs/actionTypes';
import { successStatusCodes } from 'defs/httpStatusCodes';

const loginSucceed = ({id_token}) => {
    return {
        type: defs.LOGIN_SUCCEED,
        payload: id_token
    };
};

const loginFailed = ({code, entity}) => {
    return {
        type: defs.LOGIN_FAILED,
        payload: {
            entity,
            status: code
        }
    };
};

export const loginUser = ({password, email}) => {
    return dispatch => {
        dispatch({type: defs.LOGIN_PENDING});
        api.loginUser({ password, email })
            .then(({ entity, status: { code }}) => {
                let { id_token } = entity;
                if (~successStatusCodes.indexOf(code) && id_token) {
                    dispatch(loginSucceed({id_token}));
                } else {
                    dispatch(loginFailed({status: code, entity}));
                }
            }, ({ entity, status: { code }}) => {
                dispatch(loginFailed({status: code, entity}));
            });
    };
};

export const logoutUser = () => {
    return dispatch => {
        api.logout();
        dispatch({
            type: defs.LOGOUT
        });
    };
};

export const userInfoSucceed = ({id, name, email, balance}) => {
    return {
        type: defs.USER_INFO_SUCCEED,
        payload: {id, name, email, balance}
    };
};

export const userInfoFailed = ({status, entity}) => {
    return {
        type: defs.USER_INFO_FAILED,
        payload: {status, entity}
    };
};

export const userInfo = () => {
    return dispatch => {
        dispatch({type: defs.USER_INFO_PENDING});
        api.userInfo()
            .then(({ entity={}, status: { code }}) => {
                if (~successStatusCodes.indexOf(code)) {
                    let {id, name, email, balance} = entity.user_info_token;
                    dispatch(userInfoSucceed({id, name, email, balance}));
                } else {
                    dispatch({status: code, entity});
                }
            }, ({ entity, status: { code }}) => {
                dispatch(userInfoFailed({status: code, entity}));
            });
    };
};

const registerFailed = ({code, entity}) => {
    return {
        type: defs.REGISTER_FAILED,
        payload: {
            entity,
            status: code
        }
    }
};

const registerSucceed = ({code}) => {
    return {
        type: defs.REGISTER_SUCCEED,
        payload: {
            status: code
        }
    };
};



export const registerUser = ({ username, password, email }) => {
    return dispatch => {
        dispatch({type: defs.REGISTER_PENDING});
        api.registerUser({ username, password, email })
            .then(({ entity, status: { code }}) => {
                if (~successStatusCodes.indexOf(code)) {
                    let { id_token } = entity;
                    if (id_token) {
                        dispatch(loginSucceed({id_token}));
                    }
                    dispatch(registerSucceed({code}));
                } else {
                    dispatch(registerFailed({code, entity}));
                }
            }, ({ entity, status: { code }}) => {
                dispatch(registerFailed({code, entity}));
            });
    };
};