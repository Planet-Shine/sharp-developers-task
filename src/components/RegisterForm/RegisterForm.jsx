
import ImmutablePropTypes from 'react-immutable-proptypes';
import React, { Component, PropTypes } from 'react';
import './RegisterForm.less'

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import { ButtonLink } from 'components';

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

class RegisterForm extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        onSubmit: PropTypes.func,
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
        this.handleSubmit         = this.handleSubmit.bind(this);
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handleEmailChange    = this.handleEmailChange.bind(this);
        this.handlePassword1Field = this.handlePassword1Field.bind(this);
        this.handlePassword2Field = this.handlePassword2Field.bind(this);
    }

    handleUsernameChange({target: {name}}, value) {
        this.props.onChange(name, value);
    }

    handleEmailChange({target: {name}}, value) {
        this.props.onChange(name, value);
    }

    handlePassword1Field({target: {name}}, value) {
        this.props.onChange(name, value);
    }

    handlePassword2Field({target: {name}}, value) {
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
        var { errors, props } = this.props;
        const errorMap = {};
        errors = errors.toJS();
        errors.forEach(({error, name}) => {
            errorMap[name] = errorMessages[name][error];
        });
        const { enabled } = props.toJS();
        const disabled = !enabled;
        return (
            <form className="register-form"
                  onSubmit={this.handleSubmit}
                  noValidate>
                <div className="register-form__field">
                    <TextField ref={e => this.usernameField = e}
                               type="text"
                               name="username"
                               onChange={this.handleUsernameChange}
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
                               onChange={this.handleEmailChange}
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
                               onChange={this.handlePassword1Field}
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
                               onChange={this.handlePassword2Field}
                               hintText="повторите пароль"
                               errorText={errorMap["password2"]}
                               fullWidth={true}
                               value={password2}
                               disabled={disabled}/>
                </div>
                <div className="register-form__actions">
                    <RaisedButton disabled={disabled} primary={true} label="Зарегистрировать" containerElement="label">
                        <input type="submit" />
                    </RaisedButton>
                    <ButtonLink to="/login">
                        <FlatButton label="Вход" containerElement="label" />
                    </ButtonLink>
                </div>
            </form>
        );
    }
}

export default RegisterForm;