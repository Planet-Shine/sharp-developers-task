
import React, { Component, PropTypes } from 'react';
import { RegisterPage } from 'components';
import { connect } from 'react-redux';

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
        const { location } = this.props;
        if (location.state && location.state.nextPathname) {
            this.context.router.replace(location.state.nextPathname);
        } else {
            this.context.router.replace('/account');
        }
    }

    render() {
        return (
            <RegisterPage />
        );
    }
}

export default PWRegisterPage;