
import ImmutablePropTypes from 'react-immutable-proptypes';
import React, { Component, PropTypes } from 'react';
import { LoggedInLayout } from 'components';
import { connect } from 'react-redux'
import { userInfo, logoutUser } from 'actions/account';

const mapStateToProps = ({account}) => {
    return {
        account
    };
};
@connect(mapStateToProps)
class PWLoggedInLayout extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    };
    static propTypes = {
        account: ImmutablePropTypes.map
    };

    constructor() {
        super();
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        this.updateApp();
    }

    componentWillUpdate(nextProps) {
        this.updateApp(nextProps);
    }

    updateApp(nextProps) {
        this.redirectToLoginIfNeeded(nextProps);
        this.loadUserInfo(nextProps);
    }

    redirectToLoginIfNeeded(nextProps) {
        const { account } = nextProps || this.props;
        if (!account.get('loggedIn')) {
            this.context.router.replace('/login');
        }
    }

    loadUserInfo(nextProps) {
        const { account } = nextProps || this.props;
        const { loaded, pending, loggedIn } = account.toJS();
        if (!pending && !loaded && loggedIn) {
            this.props.dispatch(userInfo());
        }
    }

    handleLogout() {
        this.props.dispatch(logoutUser());
    }

    render() {
        const { account, children } = this.props;
        return (
            <LoggedInLayout account={account} onLogout={this.handleLogout}>
                {children}
            </LoggedInLayout>
        );
    }
}

export default PWLoggedInLayout;