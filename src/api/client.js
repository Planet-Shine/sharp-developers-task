
import pathPrefix from 'rest/interceptor/pathPrefix';
import oAuth from 'rest/interceptor/';
import rest from 'rest';
import mime from 'rest/interceptor/mime';
const baseUrl = "http://193.124.114.46:3001/";

export default (idToken) => {
    var client = rest
        .wrap(pathPrefix, { prefix: baseUrl })
        .wrap(mime, { mime: 'application/json' });
    if (idToken) {
        client = rest.wrap(oAuth, {
            token: `Bearer ${idToken}`
        });
    }
    return client;
};