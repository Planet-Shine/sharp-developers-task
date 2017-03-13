
import React, { Component } from 'react';
import './RegisterPage.less';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { Card, CardTitle, CardHeader } from 'material-ui/Card';
import { Link } from 'react-router';
import { ParrotWingsHeader, ButtonLink } from 'components';

class RegisterPage extends Component {

    render() {
        return (
            <Card className="register-card">
                <ParrotWingsHeader />
                <CardTitle title="Регистрация" />
                <form className="register-form">
                    <div className="register-form__field">
                        <TextField hintText="email" fullWidth={true} />
                    </div>
                    <div className="register-form__field">
                        <TextField type="password" hintText="пароль" fullWidth={true} />
                    </div>
                    <div className="register-form__field">
                        <TextField type="password" hintText="повторение пароля" fullWidth={true} />
                    </div>
                    <div className="register-form__actions">
                        <RaisedButton primary={true} label="Регистрация"  />
                        <ButtonLink to="/login">
                            <FlatButton label="Войти" containerElement="label" />
                        </ButtonLink>
                    </div>
                </form>
            </Card>
        );
    }
}

export default RegisterPage;
