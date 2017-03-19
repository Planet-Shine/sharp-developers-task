
import React, { Component, PropTypes } from 'react';
import { CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import './ParrotWingsHeader.less';

import {
    white
} from 'material-ui/styles/colors';

class ParrotWingsHeader extends Component  {
    static propTypes = {
        style: PropTypes.object
    };

    render() {
        return (
            <CardHeader
                style={this.props.style}
                avatar={<Avatar
                  style={{display:'inline-block'}}
                  src="/images/coin-ico.png"
                  backgroundColor={white}
                  size={35}
                />}
                title="Parrot wings"
                subtitle="Платёжная система"
                />
        );
    }
}

export default ParrotWingsHeader;
