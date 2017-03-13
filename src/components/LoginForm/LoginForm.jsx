
import React, { Component } from 'react';
import './LoginForm.less';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { ButtonLink } from 'components';

class LoginForm extends Component {

    render () {
        return (
            <form className="login-form">
                <div className="login-form__field">
                    <TextField hintText="email" fullWidth={true} />
                </div>
                <div className="login-form__field">
                    <TextField type="password" hintText="пароль" fullWidth={true} />
                </div>
                <div className="login-form__actions">
                    <RaisedButton primary={true} label="Войти"  />
                    <ButtonLink to="/register">
                        <FlatButton containerElement="label" label="Регистрация" />
                    </ButtonLink>
                </div>
            </form>
        );
    }
}

export default LoginForm;