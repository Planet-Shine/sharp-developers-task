
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import produceStore from 'store';
import getRoutes from 'routes';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { routerStateChange } from 'actions/router';

import './styles/base.less';

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = produceStore();

const component = (
    <Router history={hashHistory}
            onUpdate={function() {
               store.dispatch(routerStateChange({state: this.state}));
            }}>
        {getRoutes(store)}
    </Router>
);

function renderApp() {
    ReactDOM.render(
        <Provider store={store} key="provider">
            <MuiThemeProvider>
                {component}
            </MuiThemeProvider>
        </Provider>,
        document.getElementById('mount-point')
    );
}
renderApp();