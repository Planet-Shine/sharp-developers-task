
import React from 'react';
import { Route, Redirect } from 'react-router';
import {
    AppLayout,
    VisitorLayout,
    LoginPage,
    RegisterPage,
    LoggedInLayout,
    AccountPage,
    TransactionPage,
    HistoryPage
} from 'components';

export default () => {
    return (
        <Route component={AppLayout}>
            <Redirect from="/" to="/account" />
            <Route path="/" component={VisitorLayout}>
                <Route name="login" path="/login" component={LoginPage} />
                <Route name="register" path="/register" component={RegisterPage} />
            </Route>
            <Route path="/" component={LoggedInLayout} onEnter={requireAuth}>
                <Route name="account" path="/account" component={AccountPage} />
                <Route name="transaction" path='/transaction' component={TransactionPage} />
                <Route name="history" path='/history' component={HistoryPage} />
            </Route>
        </Route>
    );
};


function requireAuth(nextState, replace) {
    console.log('requireAuth!');
    /*
    if (!SessionStore.isLoggedIn()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        });
    }
    */
}