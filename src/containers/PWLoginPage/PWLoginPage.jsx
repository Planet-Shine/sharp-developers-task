
import React, { Component, PropTypes } from 'react';
import { LoginPage } from 'components';
import { connect } from 'react-redux';

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
        const { location } = this.props;
        if (location.state && location.state.nextPathname) {
            let nextPathname = location.state.nextPathname;
            delete location.state.nextPathname;
            this.context.router.replace(nextPathname);
        } else {
            this.context.router.replace('/account');
        }
    }

    render() {
        return (
            <LoginPage />
        );
    }
}

export default PWLoginPage;