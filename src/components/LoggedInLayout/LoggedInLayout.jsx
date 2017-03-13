
import React, { Component } from 'react';
import './LoggedInLayout.less';

class LoggedInLayout extends Component {

    render() {
        return (
            <div>
                LoggedInLayout
                {this.props.children}
            </div>
        );
    }
}

export default LoggedInLayout;