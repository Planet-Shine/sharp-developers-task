
import React, { Component } from 'react';
import { CardHeader } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

import {
    white
} from 'material-ui/styles/colors';

class ParrotWingsHeader extends Component  {

    render() {
        return (
            <CardHeader
                avatar={<Avatar
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
