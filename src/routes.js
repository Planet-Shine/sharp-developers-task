
import React from 'react';
import { Route, Redirect } from 'react-router';
import {
    AppLayout,
    VisitorLayout,
    LoginPage,
    RegisterPage,
    AccountPage,
    TransactionPage,
    HistoryPage
} from 'components';

import {
    PWLoginPage,
    PWRegisterPage,
    PWLoggedInLayout
} from 'containers';

export default (store) => {
    return (
        <Route component={AppLayout}>
            <Redirect from="/" to="/account" />
            <Route path="/" component={VisitorLayout}>
                <Route name="login" path="/login" component={PWLoginPage} />
                <Route name="register" path="/register" component={PWRegisterPage} />
            </Route>
            <Route path="/" component={PWLoggedInLayout} onEnter={requireAuth}>
                <Route name="account" path="/account" component={AccountPage} />
                <Route name="transaction" path='/transactions/create' component={TransactionPage} />
                <Route name="transactions" path='/transactions' component={HistoryPage} />
            </Route>
        </Route>
    );

    function requireAuth(nextState, replace) {
        if (!store.getState().account.get('loggedIn')) {
            replace({
                pathname: '/login',
                state: { nextPathname: nextState.location.pathname }
            });
        }
    }
};

