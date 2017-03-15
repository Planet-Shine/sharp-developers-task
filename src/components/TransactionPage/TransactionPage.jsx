
import React, { Component } from 'react';
import './TransactionPage.less';
import { CardText, CardTitle } from 'material-ui/Card';

import {TransactionForm, TransactionHistory} from 'components';

class TransactionPage extends Component {

    render() {
        return (
            <div>
                <CardTitle title="Перевод денег" />
                <TransactionForm />
                <CardText>
                    Выберите перевод из истории, чтобы заполнить форму
                    <TransactionHistory />
                </CardText>
            </div>
        );
    }
}

export default TransactionPage;
