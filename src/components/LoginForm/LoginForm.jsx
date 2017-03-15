
import ImmutablePropTypes from 'react-immutable-proptypes';
import React, { Component, PropTypes } from 'react';
import './LoginForm.less';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import CircularProgress from 'material-ui/CircularProgress';
import { ButtonLink } from 'components';
import { CardText } from 'material-ui/Card';

import httpStatusCodes from 'defs/httpStatusCodes';

import {
    red500,
    green500
} from 'material-ui/styles/colors';

const errorMessages = {
    email: {
        required: 'Введите email'
    },
    password: {
        required: 'Введите пароль'
    }
};

const formErrors = {
    [httpStatusCodes.BadRequest]: `Авторизация неудачна. Проверьте, что все поля введены правильно.`
};

class LoginForm extends Component {

    static propTypes = {
        onChange: PropTypes.func,
        onSubmit: PropTypes.func,
        fields: ImmutablePropTypes.mapContains({
            email: PropTypes.string,
            password: PropTypes.string
        }),
        errors: ImmutablePropTypes.list,
        properties: ImmutablePropTypes.map
    };

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
    }

    handleTextFieldChange({target: {name}}, value) {
        this.props.onChange(name, value);
    }
    
    handleSubmit(event) {
        event.preventDefault();
        const enabled = this.props.properties.get('enabled');
        if (enabled) {
            const email = this.emailField.input.value;
            const password = this.passwordField.input.value;
            this.props.onSubmit({
                email,
                password
            });
        }
    }

    render () {
        const { email, password } = this.props.fields.toJS();
        var { errors, properties, account } = this.props;
        const errorMap = {};
        errors = errors.toJS();
        errors.forEach(({error, name}) => {
            errorMap[name] = errorMessages[name][error];
        });
        const { enabled, succeed, error, status } = properties.toJS();
        const disabled = !enabled;
        const loggedIn = account.get('loggedIn');
        
        return (
            <form className="login-form"
                  onSubmit={this.handleSubmit}
                  noValidate>
                <div className="login-form__field">
                    <TextField ref={e => this.emailField = e}
                               type="email"
                               name="email"
                               onChange={this.handleTextFieldChange}
                               hintText="email"
                               errorText={errorMap["email"]}
                               value={email}
                               fullWidth={true}
                               disabled={disabled}/>
                </div>
                <div className="login-form__field">
                    <TextField ref={e => this.passwordField = e}
                               type="password"
                               name="password"
                               onChange={this.handleTextFieldChange}
                               hintText="пароль"
                               errorText={errorMap["password"]}
                               value={password}
                               fullWidth={true}
                               disabled={disabled}/>
                </div>
                {
                    succeed &&
                    <CardText style={{color: green500}}>
                        Вы успешно авторизованы. Через мгновение вы будете перемещены на страницу вашего счёта.<br />
                        Добро пожаловать!
                    </CardText>
                }
                {
                    error &&
                    <CardText style={{color: red500}}>
                        {error || formErrors[status] || formErrors[httpStatusCodes.BadRequest]}
                    </CardText>
                }
                <div className="login-form__actions">
                    {
                        !succeed &&
                        <RaisedButton primary={true} label="Войти" disabled={disabled} containerElement="label">
                            <input type="submit"/>
                        </RaisedButton>
                    }
                    {disabled && <CircularProgress className="login-form__circular" />}
                    {
                        !succeed && enabled &&
                        <ButtonLink to="/register">
                            <FlatButton containerElement="label" label="Регистрация"/>
                        </ButtonLink>
                    }
                </div>
            </form>
        );
    }
}

export default LoginForm;