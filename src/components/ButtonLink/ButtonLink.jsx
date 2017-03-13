

import React, { Component } from 'react';
import './ButtonLink.less';
import { Link } from 'react-router';

class ButtonLink extends Component {

    render() {
        const {
            to,
            children
        } = this.props;
        return (
            <Link to={to} className="button-link">
                {children}
            </Link>
        );
    }
}

export default ButtonLink;

