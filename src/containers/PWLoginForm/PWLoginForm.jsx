
import React, { Component } from 'react';
import { LoginForm } from 'components';
import { connect } from 'react-redux';

import { validEmailRegExp, filledString } from 'utils/validation';

const mapStateToProps = (state) => {
    return {
        formState: state.loginForm
    };
};

@connect(mapStateToProps)
class PWLoginForm extends Component {

    handleSubmit({ email, password }) {
        var formState = {
            email : {
                value: email,
                errors: []
            },
            password: {
                value: password,
                errors: []
            }
        };
        if (!validEmailRegExp.test(email)) {
            formState.email.errors.push({
                type: 'invalid'
            });
        }
        if (!filledString.test(email)) {
            formState.email.errors.push({
                type: 'required'
            });
        }
        if (filledString.test(password)) {
            formState.password.errors.push({
                type: 'required'
            });
        }
        this.props.dispatch();
    }

    render() {
        return (
            <LoginForm onSubmit={this.handleSubmit} />
        );
    }
}

export default PWLoginForm;