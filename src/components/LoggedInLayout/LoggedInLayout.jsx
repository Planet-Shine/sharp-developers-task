
import ImmutablePropTypes from 'react-immutable-proptypes';
import React, { Component, PropTypes } from 'react';
import './LoggedInLayout.less';
import {StatusBar} from 'components';
import {ParrotWingsHeader, UserInfo, CardPage} from 'components';

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
        const {account} = this.props;

        return (
            <div className="logged-in-layout">
                <StatusBar>
                    <ParrotWingsHeader style={parrotWingsHeaderStyle} />
                    <UserInfo account={account} onLogout={this.props.onLogout} />
                </StatusBar>
                <CardPage>
                    {this.props.children}
                </CardPage>
            </div>
        );
    }
}

export default LoggedInLayout;