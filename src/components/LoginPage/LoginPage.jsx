
import React, { Component } from 'react';
import './LoginPage.less';
import { Card, CardTitle } from 'material-ui/Card';
import { ParrotWingsHeader } from 'components';
import { PWLoginForm } from 'containers';


class LoginPage extends Component {

    render() {
        return (
            <Card className="login-card">
                <ParrotWingsHeader />
                <CardTitle title="Вход" />
                <PWLoginForm />
            </Card>
        );
    }
}

export default LoginPage;
