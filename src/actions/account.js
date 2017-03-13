
import api from 'api';
import consts from 'constants';

export const loginUser = (dispatch) => {
    return dispatch => {
        dispatch({type: consts.LOGIN_PENDING});
        dispatch({type: consts.LOGIN_SUCCEED});
        dispatch({type: consts.LOGIN_FAILED});
    };
};

export const registerUser = ({ username, password, email }) => {
    return dispatch => {
        dispatch({type: consts.REGISTER_PENDING});
        api.registerUser({ username, password, email }).then(data => {
            dispatch({
                type: consts.REGISTER_SUCCEED,
                payload: null
            });
        }, error => {
            dispatch({
                type: consts.REGISTER_FAILED,
                payload: null
            });
        });
    };
};