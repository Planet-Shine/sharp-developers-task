
import React, { Component } from 'react';
import './AppLayout.less';

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
