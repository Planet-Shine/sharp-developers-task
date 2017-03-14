
import ImmutablePropTypes from 'react-immutable-proptypes';
import React, { Component, PropTypes } from 'react';
import './RegisterForm.less'

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import { CardText } from 'material-ui/Card';

import { ButtonLink } from 'components';
import httpStatusCodes from 'defs/httpStatusCodes';

import {
    red500,
    green500
} from 'material-ui/styles/colors';

const errorMessages = {
    username: {
        required: 'Введите ваше имя'
    },
    email: {
        invalid: 'Введите корректный email',
        required: 'Введите email'
    },
    password1: {
        required: 'Введите пароль'
    },
    password2: {
        notConfirmed: 'Пароли не совпадают. Введите еще раз',
        required: 'Введите пароль еще раз для подтвеждения'
    }
};

const formErrors = {
    [httpStatusCodes.BadRequest]: `Регистрация неудачна. Проверьте, что все поля введены корректно 
    и удостоверьтесь, что вы не были зарегистрированы в системе прежде.`
};

class RegisterForm extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        onSubmit: PropTypes.func,
        account: ImmutablePropTypes.mapContains({
            loggedIn: PropTypes.bool
        }),
        fields: ImmutablePropTypes.mapContains({
            username: PropTypes.string,
            email: PropTypes.string,
            password1: PropTypes.string,
            password2: PropTypes.string
        }),
        errors: ImmutablePropTypes.list
    };

    constructor() {
        super();
        this.handleSubmit          = this.handleSubmit.bind(this);
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    }

    handleTextFieldChange({target: {name}}, value) {
        this.props.onChange(name, value);
    }

    handleSubmit(event) {
        event.preventDefault();
        const enabled = this.props.props.get('enabled');
        if (enabled) {
            const username = this.usernameField.input.value;
            const email = this.emailField.input.value;
            const password1 = this.password1Field.input.value;
            const password2 = this.password2Field.input.value;
            this.props.onSubmit({
                username,
                email,
                password1,
                password2
            });
        }
    }

    render() {
        const { username, email, password1, password2 } = this.props.fields.toJS();
        var { errors, props, account } = this.props;
        const errorMap = {};
        errors = errors.toJS();
        errors.forEach(({error, name}) => {
            errorMap[name] = errorMessages[name][error];
        });
        const { enabled, succeed, error, status } = props.toJS();
        const disabled = !enabled;
        const loggedIn = account.get('loggedIn');
        return (
            <form className="register-form"
                  onSubmit={this.handleSubmit}
                  noValidate>
                <div className="register-form__field">
                    <TextField ref={e => this.usernameField = e}
                               type="text"
                               name="username"
                               onChange={this.handleTextFieldChange}
                               hintText="имя"
                               errorText={errorMap["username"]}
                               fullWidth={true}
                               value={username}
                               disabled={disabled} />
                </div>
                <div className="register-form__field">
                    <TextField ref={e => this.emailField = e}
                               name="email"
                               type="email"
                               onChange={this.handleTextFieldChange}
                               hintText="email"
                               errorText={errorMap["email"]}
                               fullWidth={true}
                               value={email}
                               disabled={disabled}/>
                </div>
                <div className="register-form__field">
                    <TextField ref={e => this.password1Field = e}
                               type="password"
                               name="password1"
                               onChange={this.handleTextFieldChange}
                               hintText="пароль"
                               errorText={errorMap["password1"]}
                               fullWidth={true}
                               value={password1}
                               disabled={disabled}/>
                </div>
                <div className="register-form__field">
                    <TextField ref={e => this.password2Field = e}
                               type="password"
                               name="password2"
                               onChange={this.handleTextFieldChange}
                               hintText="повторите пароль"
                               errorText={errorMap["password2"]}
                               fullWidth={true}
                               value={password2}
                               disabled={disabled}/>
                </div>
                {
                    succeed &&
                    <CardText style={{color: green500}}>
                        Регистрация прошла успешно. {loggedIn && 'Через мгновение вы будете перемещены на страницу вашего счёта.'}<br />
                        Добро пожаловать!
                    </CardText>
                }
                {
                    error &&
                    <CardText style={{color: red500}}>
                        {error || formErrors[status] || formErrors[httpStatusCodes.BadRequest]}
                    </CardText>
                }
                <div className="register-form__actions">
                    <RaisedButton disabled={disabled} primary={true} label="Зарегистрировать" containerElement="label">
                        <input type="submit" />
                    </RaisedButton>
                    {disabled && <CircularProgress className="register-form__circular" />}
                    <ButtonLink to="/login">
                        <FlatButton label="Вход" containerElement="label" />
                    </ButtonLink>
                </div>
            </form>
        );
    }
}

export default RegisterForm;