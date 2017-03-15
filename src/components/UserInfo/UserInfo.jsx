
import ImmutablePropTypes from 'react-immutable-proptypes';
import React, { Component, PropTypes } from 'react';
import './UserInfo.less';
import CircularProgress from 'material-ui/CircularProgress';

class UserInfo extends Component {

    static propTypes = {
        account: ImmutablePropTypes.map,
        onLogout: PropTypes.func
    };

    render() {
        const {account} = this.props;
        const {pending, name, balance, loaded} = account.toJS();
        return (
            <div className="user-info">
                {
                    pending &&
                    <CircularProgress />
                }
                {
                    !pending && loaded &&
                    <div className="user-info__sub">
                        <span className="user-info__username">
                            {name}
                        </span>
                        <span className="user-info__amount">
                            {balance} PW
                        </span><br />
                        <span className="user-info__action" onClick={this.props.onLogout}>
                            logout
                        </span>
                    </div>
                }
            </div>
        );
    }
}

export default UserInfo;