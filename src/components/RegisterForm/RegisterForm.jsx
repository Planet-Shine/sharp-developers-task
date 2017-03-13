
import React, { Component } from 'react';
import './RegisterForm.less'

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import { ButtonLink } from 'components';

class RegisterForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func
    };

    handleSubmit() {
        const username = this.usernameField.value;
        const email = this.emailField.value;
        const password1 = this.password1Field.value;
        const password2 = this.password2Field.value;
        this.props.onSubmit({
            username,
            email,
            password1,
            password2
        });
    }

    render() {
        return (
            <form className="register-form"
                  onSubmit={this.handleSubmit} >
                <div className="register-form__field">
                    <TextField ref={e => this.usernameField = e}
                               hintText="имя"
                               fullWidth={true} />
                </div>
                <div className="register-form__field">
                    <TextField ref={e => this.emailField = e}
                               hintText="email"
                               fullWidth={true} />
                </div>
                <div className="register-form__field">
                    <TextField ref={e => this.password1Field = e}
                               type="password"
                               hintText="пароль"
                               fullWidth={true} />
                </div>
                <div className="register-form__field">
                    <TextField ref={e => this.password2Field = e}
                               type="password"
                               hintText="повторите пароль"
                               fullWidth={true} />
                </div>
                <div className="register-form__actions">
                    <RaisedButton primary={true} label="Зарегистрировать"  />
                    <ButtonLink to="/login">
                        <FlatButton label="Вход" containerElement="label" />
                    </ButtonLink>
                </div>
            </form>
        );
    }
}

export default RegisterForm;