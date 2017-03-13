
import React, { Component } from 'react';
import './TransactionPage.less';

class VisitorLayout extends Component {

    render() {
        return (
            <div>
                VisitorLayout
                {this.props.children}
            </div>
        );
    }
}

export default VisitorLayout;
