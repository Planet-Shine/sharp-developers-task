
import React, { Component } from 'react';
import './HistoryPage.less';
import {PWTransactionHistory} from 'containers';

class HistoryPage extends Component  {

    render() {
        return (
            <PWTransactionHistory disabled={true} />
        );
    }
}

export default HistoryPage;
