
import ImmutablePropTypes from 'react-immutable-proptypes';
import React, { Component, PropTypes } from 'react';
import { TransactionForm } from 'components';
import { connect } from 'react-redux';
import throttle from 'throttle-debounce/throttle';

import { filledStringReg, floatReg } from 'utils/validation';
import { transactionForm, deleteErrors, changeField, filterUsers } from 'actions/transactionForm';
import { transaction } from 'actions/transactions';
import { parsePrice } from 'utils/validation';

const AUTOCOMPLETE_THROTTLE_DELAY = 400;
const AUTOCOMPLETE_THROTTLE_NO_TRAILING = false;
const AUTOCOMPLETE_MIN_LENGTH = 2;

const mapStateToProps = ({ transactionForm: {fields, errors, properties, filteredUsers} }) => {
    return {
        fields,
        errors,
        properties,
        filteredUsers
    };
};
@connect(mapStateToProps)
class PWTransactionForm extends Component {
    static propTypes = {
        fields: ImmutablePropTypes.mapContains({
            name: PropTypes.string,
            amount: PropTypes.string
        }),
        filteredUsers: ImmutablePropTypes.list,
        errors: ImmutablePropTypes.list,
        properties: ImmutablePropTypes.map
    };

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFilterUser = this.handleFilterUser.bind(this);
        this.handleFilterUserTrottled = throttle(AUTOCOMPLETE_THROTTLE_DELAY, AUTOCOMPLETE_THROTTLE_NO_TRAILING, this.handleFilterUser);
    }

    handleFilterUser(value) {
        const {dispatch} = this.props;
        dispatch(filterUsers({filter: value}));
    }

    handleSubmit({ name, amount }) {
        var fields = {
                name, amount
            },
            errors = [];
        if (!filledStringReg.test(name)) {
            errors.push({
                name: 'name',
                error: 'required'
            });
        }
        if (!floatReg.test(amount)) {
            errors.push({
                name: 'amount',
                error: 'floatType'
            });
        }
        if (!filledStringReg.test(amount)) {
            errors.push({
                name: 'amount',
                error: 'required'
            });
        }
        const { dispatch } = this.props;
        if (!errors.length) {
            amount = parsePrice(amount);
            dispatch(transaction({ name, amount }));
        }
        dispatch(transactionForm({fields, errors}));
    }

    handleChange(name, value) {
        const { dispatch } = this.props;
        if (name === 'name' && value.length >= AUTOCOMPLETE_MIN_LENGTH) {
            this.handleFilterUserTrottled(value);
        }
        dispatch(deleteErrors(name));
        dispatch(changeField({[name] : value}));
    }

    render() {
        const { fields, errors, properties, account, filteredUsers } = this.props;
        const { handleSubmit, handleChange } = this;
        return (
            <TransactionForm
                filteredUsers={filteredUsers}
                fields={fields}
                errors={errors}
                properties={properties}
                account={account}
                onSubmit={handleSubmit}
                onChange={handleChange} />
        );
    }
}

export default PWTransactionForm;