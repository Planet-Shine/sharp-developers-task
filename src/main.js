
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import produceStore from 'store';
import getRoutes from 'routes';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import './styles/base.less';

const store = produceStore();

const component = (
    <Router history={hashHistory}>
        {getRoutes(store.getState)}
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