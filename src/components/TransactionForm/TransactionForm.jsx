
import ImmutablePropTypes from 'react-immutable-proptypes';
import React, { Component, PropTypes } from 'react';
import './TransactionForm.less';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { CardText }  from 'material-ui/Card';
import AutoComplete from 'material-ui/AutoComplete';
import CircularProgress from 'material-ui/CircularProgress';
import { formatPrice } from 'utils/validation';


import httpStatusCodes from 'defs/httpStatusCodes';

import {
    red500,
    green500
} from 'material-ui/styles/colors';

const formErrors = {
    [httpStatusCodes.BadRequest]: `Перевод неудачна. Проверьте, что все поля введены верно.`
};

const AUTOCOMPLETE_MAX_SEARCH_RESULTS = 8;

const errorMessages = {
    name: {
        required: 'Введите имя получателя'
    },
    amount: {
        required: 'Введите сумму',
        floatType: 'Введите положительную сумму перевода'
    }
};

class TransactionForm extends Component {

    static propTypes = {
        onChange: PropTypes.func,
        onSubmit: PropTypes.func,
        fields: ImmutablePropTypes.mapContains({
            name: PropTypes.string,
            amount: PropTypes.string
        }),
        errors: ImmutablePropTypes.list,
        properties: ImmutablePropTypes.map,
        filteredUsers: ImmutablePropTypes.list
    };

    constructor() {
        super();
        this.handleSubmit                  = this.handleSubmit.bind(this);
        this.handleTextFieldChange         = this.handleTextFieldChange.bind(this);
        this.handleNameAutocolmpleteChange = this.handleNameAutocolmpleteChange.bind(this);
        this.handleFocusNameAutocomplete   = this.handleFocusNameAutocomplete.bind(this);
    }

    handleNameAutocolmpleteChange(value) {
        this.props.onChange("name", value);
    }

    handleTextFieldChange({target: {name}}, value) {
        this.props.onChange(name, value);
    }

    handleFocusNameAutocomplete() {
        this.nameField.refs.searchTextField.input.focus();
    }

    handleSubmit(event) {
        event.preventDefault();
        const enabled = this.props.properties.get('enabled');
        if (enabled) {
            const name = this.nameField.refs.searchTextField.input.value;
            const amount = this.amountField.input.value;
            this.props.onSubmit({
                name,
                amount
            });
        }
    }

    render() {
        var { filteredUsers, errors, fields, properties } = this.props;
        filteredUsers = filteredUsers.toJS()
            .map(item => (item || {}).name)
            .filter(name => name);
        const errorMap = {};
        const {amount, name} = fields.toJS();
        const {succeed, error, status, enabled} = properties.toJS();
        const disabled = !enabled;
        const resultAmount = formatPrice(amount);
        errors = errors.toJS();
        errors.forEach(({error, name}) => {
            errorMap[name] = errorMessages[name][error];
        });
        

        return (
            <form onSubmit={this.handleSubmit}
                  className="transaction-form"
                  noValidate>



                




                <div className="transaction-form__field">
                    <AutoComplete
                        ref={e => this.nameField = e}
                        floatingLabelText="кому"
                        filter={AutoComplete.fuzzyFilter}
                        onUpdateInput={this.handleNameAutocolmpleteChange}
                        onNewRequest={this.handleFocusNameAutocomplete}
                        dataSource={filteredUsers}
                        errorText={errorMap.name}
                        maxSearchResults={AUTOCOMPLETE_MAX_SEARCH_RESULTS}
                        fullWidth={true}
                        searchText={name}
                        disabled={disabled}
                    />
                </div>
                <div className="transaction-form__field transaction-form__field-amount">
                    <TextField ref={e => this.amountField = e}
                               name="amount"
                               onChange={this.handleTextFieldChange}
                               hintText="сумма"
                               errorText={errorMap.amount}
                               fullWidth={true}
                               disabled={disabled}
                               value={amount} />
                </div>
                <div>
                    <span>{resultAmount ? resultAmount + ' PW' : '—'}</span>
                    <span> в итоге к переводу</span>
                </div>
                {
                    succeed &&
                    <CardText color={green500}>
                        Перевод выполнен
                    </CardText>
                }
                {
                    error &&
                    <CardText color={red500}>
                        {error || formErrors[status] || formErrors[httpStatusCodes.BadRequest]}
                    </CardText>
                }
                <div className="transaction-form__actions">
                    <RaisedButton disabled={disabled} primary={true} label="Перевести"
                                  containerElement="label">
                        <input type="submit"/>
                    </RaisedButton>
                    {disabled && <CircularProgress className="register-form__circular" />}
                </div>

            </form>
        );
    }
}

export default TransactionForm;