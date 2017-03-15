
import React, { Component } from 'react';
import './StatusBar.less';

class StatusBar extends Component {

    render() {
        return (
            <div className="status-bar">
                <div className="status-bar__card">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default StatusBar;