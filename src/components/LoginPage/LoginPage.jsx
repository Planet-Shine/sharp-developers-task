
import React, { Component } from 'react';
import './LoginPage.less';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Card, CardTitle } from 'material-ui/Card';
import { ParrotWingsHeader, ButtonLink } from 'components';


class LoginPage extends Component {

    render() {
        return (
            <Card className="login-card">
                <ParrotWingsHeader />
                <CardTitle title="Вход" />
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
            </Card>
        );
    }
}

export default LoginPage;
