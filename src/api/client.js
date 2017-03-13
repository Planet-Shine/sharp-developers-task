import { createClient } from "fetch-plus";
import fetchPlusBearerauth from "fetch-plus-bearerauth";
const baseUrl = "http://193.124.114.46:3001/";

export default (idToken) => {
    var client;
    if (idToken) {
        client = createClient(baseUrl);
        client.addMiddleware(fetchPlusBearerauth(idToken));
    } else {
        client = createClient(baseUrl);
    }
    return client;
};