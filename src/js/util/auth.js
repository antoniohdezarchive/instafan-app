import request from './request';

const exports = {};

exports.verifySession = function() {
    const p = new Promise((resolve, reject) => {
        if ( !localStorage.getItem('accessToken') ) {
            reject({
                'message': 'empty token'
            });
            return;
        }
        const options = {
            headers: {
                'x-access-token': localStorage.getItem('accessToken')
            }
        }
        request.fetch('auth/verify-token', options)
            .then((response) => {
                resolve(response);
            })
            .catch((error) => {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('userID');
                reject(error);
            });
    });

    return p;
};

exports.signIn = function(email, password) {
    const body = { email, password };

    const req = request.post('auth/login', body);

    req.then((result) => {
        localStorage.setItem('accessToken', result.accessToken);
        localStorage.setItem('userID', result.userID);
    });

    return req;
    /*req.catch((error) => {
        console.log(error);
    });*/
};

exports.signOut = function() {
    localStorage.removeItem('accessToken');
};

export default exports;