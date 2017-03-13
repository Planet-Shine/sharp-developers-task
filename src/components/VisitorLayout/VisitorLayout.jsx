
import React, { Component } from 'react';
import './VisitorLayout.less';
import {Card, CardTitle, CardText} from 'material-ui/Card';

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
