
import ImmutablePropTypes from 'react-immutable-proptypes';
import React, { Component, PropTypes } from 'react';
import { RegisterForm } from 'components';
import { connect } from 'react-redux';

import { validEmailReg, filledStringReg } from 'utils/validation';
import { registerForm, deleteErrors, changeField } from 'actions/registerForm';
import { registerUser } from 'actions/account';

const mapStateToProps = ({ registerForm: {fields, errors, properties}, account }) => {
    return {
        fields,
        errors,
        properties,
        account
    };
};
@connect(mapStateToProps)
class PWRegisterForm extends Component {
    static propTypes = {
        fields: ImmutablePropTypes.mapContains({
            username: PropTypes.string,
            email: PropTypes.string,
            password1: PropTypes.string,
            password2: PropTypes.string
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

    handleSubmit({ username, email, password1, password2 }) {
        var fields = {
                username, email, password1, password2
            },
            errors = [];
        if (!filledStringReg.test(username)) {
            errors.push({
                name: 'username',
                error: 'required'
            });
        }
        if (!validEmailReg.test(email)) {
            errors.push({
                name: 'email',
                error: 'invalid'
            });
        }
        if (!filledStringReg.test(email)) {
            errors.push({
                name: 'email',
                error: 'required'
            });
        }
        if (!filledStringReg.test(password1)) {
            errors.push({
                name: 'password1',
                error: 'required'
            });
        }
        if (password1 !== password2) {
            errors.push({
                name: 'password2',
                error: 'notConfirmed'
            });
        }
        if (!filledStringReg.test(password2)) {
            errors.push({
                name: 'password2',
                error: 'required'
            });
        }
        const { dispatch } = this.props;
        if (!errors.length) {
            dispatch(registerUser({ username, email, password: password1 }));
        }
        dispatch(registerForm({fields, errors}));
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
            <RegisterForm
                fields={fields}
                errors={errors}
                properties={properties}
                account={account}
                onSubmit={handleSubmit}
                onChange={handleChange} />
        );
    }
}

export default PWRegisterForm;