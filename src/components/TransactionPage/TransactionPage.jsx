
import React, { Component } from 'react';
import './TransactionPage.less';
import { CardText, CardTitle } from 'material-ui/Card';
import { PWTransactionForm, PWTransactionHistory } from 'containers';

class TransactionPage extends Component {

    render() {
        return (
            <div>
                <CardTitle title="Перевод денег" />
                <PWTransactionForm />
                <CardText>
                    — Выберите из истории, чтобы сформировать новый перевод:
                </CardText>
                <PWTransactionHistory disabled={false} />
            </div>
        );
    }
}

export default TransactionPage;
