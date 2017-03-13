
import React, { Component } from 'react';
import './RegisterPage.less';

import { Card, CardTitle } from 'material-ui/Card';
import { ParrotWingsHeader } from 'components';
import { PWRegisterForm } from 'containers';

class RegisterPage extends Component {

    render() {
        return (
            <Card className="register-card">
                <ParrotWingsHeader />
                <CardTitle title="Регистрация" />
                <PWRegisterForm />
            </Card>
        );
    }
}

export default RegisterPage;
