
import React, { Component } from 'react';
import './AccountPage.less';
import { CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import { ButtonLink } from 'components';

class AccountPage extends Component {

    render() {
        return (
            <div>
                <CardText className="account-page__actions">
                    <ButtonLink to="/transactions/create">
                        <RaisedButton primary={true} label="Перевод денег" containerElement="label" />
                    </ButtonLink>
                    <ButtonLink to="/transactions">
                        <FlatButton label="История переводов" containerElement="label" />
                    </ButtonLink>
                </CardText>
                <CardText>
                    Ваше веб-приложение электронных денежных переводов Parrot Wings.<br />
                    Совершайте переводы между участниками системы.
                </CardText>
            </div>
        );
    }
}

export default AccountPage;
