
import React, { Component, PropTypes } from 'react';
import { LoginPage } from 'components';
import { connect } from 'react-redux';
import { refreshRegisterForm } from 'actions/registerForm';
import { refreshLoginForm } from 'actions/loginForm';
import AutoComplete from 'material-ui/AutoComplete';

const mapStateToProps = ({ account }) => {
    return {
        account
    };
};
@connect(mapStateToProps)
class PWLoginPage extends Component {
    static contextTypes = {
        router: PropTypes.object.isRequired
    };

    componentDidMount() {
        const { account } = this.props;
        const loggedIn = account.get('loggedIn');
        if (loggedIn) {
            this.redirectLoggedInUser();
        }
    }

    componentWillUpdate({ account }) {
        const loggedIn = account.get('loggedIn');
        if (loggedIn) {
            this.redirectLoggedInUser();
        }
    }

    redirectLoggedInUser() {
        const { location, dispatch } = this.props;
        if (location.state && location.state.nextPathname) {
            let nextPathname = location.state.nextPathname;
            delete location.state.nextPathname;
            this.context.router.replace(nextPathname);
        } else {
            this.context.router.replace('/account');
        }
        dispatch(refreshRegisterForm());
        dispatch(refreshLoginForm());
    }

    render() {
        const fruit = [
            'Apple', 'Apricot', 'Avocado',
            'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
            'Boysenberry', 'Blood Orange',
            'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
            'Coconut', 'Cranberry', 'Clementine',
            'Damson', 'Date', 'Dragonfruit', 'Durian',
            'Elderberry',
            'Feijoa', 'Fig',
            'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
            'Honeydew', 'Huckleberry',
            'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
            'Kiwi fruit', 'Kumquat',
            'Lemon', 'Lime', 'Loquat', 'Lychee',
            'Nectarine',
            'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
            'Olive', 'Orange',
            'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
            'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
            'Quince',
            'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
            'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
            'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
            'Ugli fruit',
            'Watermelon',
        ];
        return (
            <div>
            <LoginPage />

        <AutoComplete
            floatingLabelText="Type 'peah', fuzzy search"
            filter={AutoComplete.caseInsensitiveFilter}
            dataSource={fruit}
            maxSearchResults={5}
        />
        </div>
        );
    }
}

export default PWLoginPage;