
import createClient from './client'
var client;
updateClient();

function updateClient(idToken) {
    client = createClient(idToken);
}

const api = {
    registerUser({ username, password, email }) {
        var promise = client({
            path: 'users',
            method: "POST",
            entity: {
                username,
                password,
                email
            }
        });
        promise.then(({ id_token }) => {
            if (id_token) {
                updateClient(id_token);
            }
        });
        return promise;
    },
    loginUser({ email, password }) {
        var promise = client({
            path: 'users',
            method: "POST",
            entity: {
                password,
                email
            }
        });
        promise.then(({ id_token }) => {
            if (id_token) {
                updateClient(id_token);
            }
        });
        return promise;
    },
    transactionHistory() {
        return client({
            path: 'api/protected/transactions',
            method: "GET"
        });
    },
    createTransaction({name, amount}) {
        return client({
            path: 'api/protected/transactions',
            method: "POST",
            entity: {
                name,
                amount
            }
        });
    },
    userInfo() {
        return client({
            path: 'api/protected/user-info',
            method: "GET"
        });
    },
    filteredUserList({ filter }) {
        return client({
            path: '/api/protected/users/list',
            method: "POST",
            entity: {
                filter
            }
        });
    }
};

export default api;