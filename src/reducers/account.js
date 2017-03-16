
import defs from 'defs/actionTypes';
import Immutable from 'immutable';
import cookies  from 'browser-cookies';


const defaultUserInfo = Immutable.fromJS({
    pending: false,
    loaded: false,
    id: null,
    name: null,
    email: null,
    balance: null,
    previousBalance: null
});
const getDefaultState = () => {
    const idToken = cookies.get('idToken');
    const defaultState = Immutable.fromJS({
        idToken: idToken,
        loggedIn: !!idToken
    }).merge(defaultUserInfo);
    return defaultState;
};

const account = (state=getDefaultState(), action) => {
    switch (action.type) {
        case defs.LOGIN_SUCCEED:
            state = state.set('idToken', action.payload);
            if (action.payload) {
                state = state.set('loggedIn', true);
            }
            return state;
        case defs.USER_INFO_PENDING:
            return state.set('pending', true);
        case defs.USER_INFO_SUCCEED:
            return state.merge(action.payload, {pending: false, loaded: true});
        case defs.TRANSACTION_PENDING:
            return (function () {
                const amount = (action.payload || {}).amount || 0;
                const currentBalance = state.get('balance');
                if (amount > currentBalance) {
                    return state;
                }
                return state.merge({
                    balance: currentBalance - amount,
                    previousBalance: currentBalance
                });
            }());
        case defs.TRANSACTION_SUCCEED:
            return state.set('balance', (action.payload || {}).balance);
        case defs.TRANSACTION_FAILED:
            return state.set('balance', state.get('previousBalance'));
        case defs.USER_INFO_FAIL:
            return state.merge(defaultUserInfo);
        case defs.LOGOUT:
            return getDefaultState();
        default:
            return state;
    }
};

export default account;