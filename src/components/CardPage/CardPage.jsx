
import React, { Component } from 'react';
import './CardPage.less';
import { Card } from 'material-ui/Card';

class CardPage extends Component {

    render() {
        return (
            <Card className="card-page">
                {this.props.children}
            </Card>
        );
    }
}

export default CardPage;