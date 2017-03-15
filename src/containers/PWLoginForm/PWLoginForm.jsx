
import ImmutablePropTypes from 'react-immutable-proptypes';
import React, { Component, PropTypes } from 'react';
import { LoginForm } from 'components';
import { connect } from 'react-redux';

import { filledStringReg } from 'utils/validation';
import { loginForm, deleteErrors, changeField } from 'actions/loginForm';
import { loginUser } from 'actions/account';

const mapStateToProps = ({ loginForm: {fields, errors, properties}, account }) => {
    return {
        fields,
        errors,
        properties,
        account
    };
};

@connect(mapStateToProps)
class PWLoginForm extends Component {

    static propTypes = {
        fields: ImmutablePropTypes.mapContains({
            email: PropTypes.string,
            password: PropTypes.string
        }),
        errors: ImmutablePropTypes.list,
        account: ImmutablePropTypes.map,
        properties: ImmutablePropTypes.map
    };

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit({ email, password }) {
        var fields = {
                email, password
            },
            errors = [];
        if (!filledStringReg.test(email)) {
            errors.push({
                name: 'email',
                error: 'required'
            });
        }
        if (!filledStringReg.test(password)) {
            errors.push({
                name: 'password',
                error: 'required'
            });
        }
        const { dispatch } = this.props;
        if (!errors.length) {
            dispatch(loginUser({ email, password }));
        }
        dispatch(loginForm({fields, errors}));
    }

    handleChange(name, value) {
        const { dispatch } = this.props;
        dispatch(deleteErrors(name));
        dispatch(changeField({[name] : value}));
    }

    render() {
        const { fields, errors, properties, account } = this.props;
        const { handleSubmit, handleChange } = this;
        return (
            <LoginForm fields={fields}
                       errors={errors}
                       properties={properties}
                       account={account}
                       onSubmit={handleSubmit}
                       onChange={handleChange} />
        );
    }
}

export default PWLoginForm;