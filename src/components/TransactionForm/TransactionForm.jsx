
import React, { Component } from 'react';
import './TransactionForm.less';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { CardText }  from 'material-ui/Card';
import AutoComplete from 'material-ui/AutoComplete';

import httpStatusCodes from 'defs/httpStatusCodes';

import {
    red500,
    green500
} from 'material-ui/styles/colors';

const formErrors = {
    [httpStatusCodes.BadRequest]: `Регистрация неудачна. Проверьте, что все поля введены корректно 
    и удостоверьтесь, что вы не были зарегистрированы в системе прежде.`
};

class TransactionForm extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTextFieldChange() {

    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        const disabled = false;
        const error = null;
        return (
            <form onSubmit={this.handleSubmit}
                  className="transaction-form"
                  noValidate>
                <div className="transaction-form__field">
                    <AutoComplete
                        floatingLabelText="кому"
                        filter={AutoComplete.fuzzyFilter}
                        dataSource={[]}
                        maxSearchResults={5}
                        fullWidth={true}
                    />
                </div>
                <div className="transaction-form__field transaction-form__field-amount">
                    <TextField ref={e => this.amountField = e}
                               name="amount"
                               type="amount"
                               onChange={this.handleTextFieldChange}
                               hintText="сумма"
                               fullWidth={true}
                               disabled={disabled} />
                </div>
                {
                    false &&
                    <CardText color={green500}>
                        Регистрация прошла успешно.<br />
                        Добро пожаловать!
                    </CardText>
                }
                {
                    false &&
                    <CardText color={red500}>
                        {error || formErrors[status] || formErrors[httpStatusCodes.BadRequest]}
                    </CardText>
                }
                <div className="transaction-form__actions">
                    <RaisedButton disabled={disabled} primary={true} label="Перевести"
                                  containerElement="label">
                        <input type="submit"/>
                    </RaisedButton>
                </div>

            </form>
        );
    }
}

export default TransactionForm;