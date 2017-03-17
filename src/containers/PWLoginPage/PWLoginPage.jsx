
import React, { Component, PropTypes } from 'react';
import { LoginPage } from 'components';
import { connect } from 'react-redux';
import { refreshRegisterForm } from 'actions/registerForm';
import { refreshLoginForm } from 'actions/loginForm';
import AutoComplete from 'material-ui/AutoComplete';

const mapStateToProps = ({ account }) => {
    return {
        account
    };
};
@connect(mapStateToProps)
class PWLoginPage extends Component {
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
            this.redirectLoggedInUser();
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
            <LoginPage />
        );
    }
}

export default PWLoginPage;