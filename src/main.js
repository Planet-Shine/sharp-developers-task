
import ReactDOM from 'react-dom';
import React from 'react';
import produceStore from 'store';
import getRoutes from 'routes';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import './styles/base.less';

const component = (
    <Router history={hashHistory}>
        {getRoutes()}
    </Router>
);

function renderApp() {
    ReactDOM.render(
        <Provider store={produceStore()} key="provider">
            {component}
        </Provider>,
        document.getElementById('mount-point')
    );
}
renderApp();