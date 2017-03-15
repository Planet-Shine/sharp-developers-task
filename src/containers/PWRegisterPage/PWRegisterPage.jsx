
import React, { Component, PropTypes } from 'react';
import { RegisterPage } from 'components';
import { connect } from 'react-redux';
import { refreshRegisterForm } from 'actions/registerForm';
import { refreshLoginForm } from 'actions/loginForm';

const REDIRECT_TIMEOUT = 2000;

const mapStateToProps = ({ account }) => {
    return {
        account
    };
};
@connect(mapStateToProps)
class PWRegisterPage extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    };
    componentDidMount() {
        const { account } = this.props;
        const loggedIn = account.get('loggedIn');
        if (loggedIn) {
            this.redirectLoggedInUser();
        }
    }

    componentWillUpdate({ account }) {
        const loggedIn = account.get('loggedIn');
        if (loggedIn) {
            /*
                Ждем небольшое время, т.к. пользователь не ожидал, что его сразу впустят
                и должен увидеть сообщение, что регистрация успешна.
            */
            setTimeout(() => {
                this.redirectLoggedInUser();
            }, REDIRECT_TIMEOUT);
        }
    }

    redirectLoggedInUser() {
        const { location, dispatch } = this.props;
        if (location.state && location.state.nextPathname) {
            let nextPathname = location.state.nextPathname;
            delete location.state.nextPathname;
            this.context.router.replace(nextPathname);
        } else {
            this.context.router.replace('/account');
        }
        dispatch(refreshRegisterForm());
        dispatch(refreshLoginForm());
    }

    render() {
        return (
            <RegisterPage />
        );
    }
}

export default PWRegisterPage;