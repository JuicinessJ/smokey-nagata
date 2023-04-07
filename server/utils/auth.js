// Auth work needs to be done
const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhh';
const expiration = '2h';

module.exports = {
    
    authMiddleware: function ({req}) {
        // a token can be either a body, query or authorization req
        let token = req.body.token || req.query.token || req.headers.authorization;
   
        if(req.headers.authorization) {
            token = token.split(' ').pop().trim();
        }

        if(!token) {
            return req;
        }

        // verify token and get user data
        try{
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }
   
        return req;
   
    },

    signToken: function ({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};