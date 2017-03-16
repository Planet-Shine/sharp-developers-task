
import React, { Component } from 'react';
import './TransactionPage.less';
import { CardText, CardTitle } from 'material-ui/Card';

import {TransactionHistory} from 'components';
import {PWTransactionForm} from 'containers';

class TransactionPage extends Component {

    render() {
        return (
            <div>
                <CardTitle title="Перевод денег" />
                <PWTransactionForm />
                <CardText>
                    Выберите перевод из истории, чтобы заполнить форму
                    <TransactionHistory />
                </CardText>
            </div>
        );
    }
}

export default TransactionPage;
