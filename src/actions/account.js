
import api from 'api';
import defs from 'defs';

export const loginUser = (dispatch) => {
    return dispatch => {
        dispatch({type: defs.LOGIN_PENDING});
        dispatch({type: defs.LOGIN_SUCCEED});
        dispatch({type: defs.LOGIN_FAILED});
    };
};


export const registerUser = ({ username, password, email }) => {
    return dispatch => {
        dispatch({type: defs.REGISTER_PENDING});
        /*
        api.registerUser({ username, password, email }).then(data => {
            dispatch({
                type: defs.REGISTER_SUCCEED,
                payload: null
            });
        }, error => {
            dispatch({
                type: defs.REGISTER_FAILED,
                payload: null
            });
        });
        */
    };
};