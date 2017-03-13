
import React, { Component } from 'react';
import './AppLayout.less';

class AppLayout extends Component {

    render() {
        return (
            <div>
                App Layout
                {this.props.children}
            </div>
        );
    }
}

export default AppLayout;
