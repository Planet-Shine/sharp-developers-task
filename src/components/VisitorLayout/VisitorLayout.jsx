
import React, { Component } from 'react';
import './VisitorLayout.less';

class VisitorLayout extends Component {

    render() {
        return (
            <div className="visitor-layout">
                {this.props.children}
            </div>
        );
    }
}

export default VisitorLayout;
