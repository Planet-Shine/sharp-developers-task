
import React, { Component } from 'react';
import './AccountPage.less';
import { StatusBar } from 'components';

class AccountPage extends Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default AccountPage;
