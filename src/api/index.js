
import createClient from './client';
var client = createClient();

const api = {
    registerUser({ username, password, email }) {
        var promise = client.request('users', {
            method: "POST",
            body: {
                username,
                password,
                email
            }
        });
        promise.then(({ id_token }) => {
            if (id_token) {
                client = createClient(id_token);
            }
        });
        return promise;
    },
    loginUser({username, email, password }){
        var promise = client.request('users', {
            method: "POST",
            body: {
                username,
                password,
                email
            }
        });
        promise.then(({ id_token }) => {
            if (id_token) {
                client = createClient(id_token);
            }
        });
        return promise;

    },
    transactionHistory() {
        return client.get('/api/protected/transactions', {});
    },
    createTransaction({name, amount}) {
        return client.post('/api/protected/transactions', {
            name,
            amount
        });
    },
    userInfo() {
        return client.get('/api/protected/user-info', {});
    },
    filteredUserList({ filter }) {
        return client.post('/api/protected/users/list', {
            filter
        });
    }
};

export default api;