
import ImmutablePropTypes from 'react-immutable-proptypes';
import React, { Component, PropTypes } from 'react';
import './LoggedInLayout.less';
import {StatusBar} from 'components';
import {ParrotWingsHeader, UserInfo, CardPage} from 'components';
import { CardText } from 'material-ui/Card';
import { Link } from 'react-router';

const parrotWingsHeaderStyle = {
    display: 'inline-block',
    float: 'left',
    padding:0
};

class LoggedInLayout extends Component {

    static propTypes  = {
        account: ImmutablePropTypes.map,
        onLogout: PropTypes.func
    };

    render() {
        const {account, isAccountPage} = this.props;

        return (
            <div className="logged-in-layout">
                <StatusBar>
                    <ParrotWingsHeader style={parrotWingsHeaderStyle} />
                    <UserInfo account={account} useUserLink={!isAccountPage} onLogout={this.props.onLogout} />
                </StatusBar>
                <CardPage>
                    {
                        !isAccountPage &&
                        <CardText>
                            <Link to="/account" className="back-link">
                                Назад к счету
                            </Link>
                        </CardText>
                    }
                    {this.props.children}
                </CardPage>
            </div>
        );
    }
}

export default LoggedInLayout;