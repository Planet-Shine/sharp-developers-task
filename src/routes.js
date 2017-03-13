
import React from 'react';
import { Route, Redirect } from 'react-router';
import {
    AppLayout,
    LoggedInLayout,
    LoginPage,
    HistoryPage,
    TransactionPage
} from 'components';

export default () => {
    return (
        <Route component={AppLayout}>
            <Redirect from="/" to="/account" />
            <Route path="/">
                <Route name="login" path="/login" component={LoginPage} />
                <Route component={LoggedInLayout} onEnter={requireAuth}>
                    <Route name="pads" path="/account" component={HistoryPage} />
                    <Route name="pad" path='/transaction' component={TransactionPage} />
                </Route>
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