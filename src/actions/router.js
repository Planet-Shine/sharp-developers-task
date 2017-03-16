
import defs from 'defs/actionTypes';

export const routerStateChange = ({state}) => {
    return {
        type: defs.ROUTER_STATE_CHANGE,
        state: state
    };
};