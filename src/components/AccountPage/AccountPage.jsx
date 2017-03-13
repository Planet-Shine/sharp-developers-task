
import React, { Component } from 'react';
import './AccountPage.less';

class AccountPage extends Component {

    render() {
        return (
            <div>
                App Layout
                {this.props.children}
            </div>
        );
    }
}

export default AccountPage;
