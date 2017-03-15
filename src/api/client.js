
import pathPrefix from 'rest/interceptor/pathPrefix';
import rest from 'rest';
import mime from 'rest/interceptor/mime';
import cookies from 'browser-cookies';
import defaultRequest from 'rest/interceptor/defaultRequest';

const baseUrl = "http://193.124.114.46:3001/";

export default (idToken=cookies.get('idToken')) => {
    var headers = {};
    if (idToken) {
        cookies.set('idToken', idToken, {expires: 1});
        headers = { Authorization: `Bearer ${idToken}` };
    }
    const client = rest
        .wrap(pathPrefix, { prefix: baseUrl })
        .wrap(mime, { mime: 'application/json'})
        .wrap(defaultRequest, {headers});
    return client;
};
export const deleteToken = () => {
    cookies.erase('idToken');
};