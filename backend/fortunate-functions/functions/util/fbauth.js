// Authenticating users with token

const admin = require('./admin').admin;
exports.FBAuth = (req, res, next) => {
    let token;
    
    // Check to see if post has Authorization with the form: Bearer <token>
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        token = req.headers.authorization.split(' ')[1];
        //console.log(token);
    } else {
        console.error('No token');
        return res.status(403).json({error: 'Unauthorized'});
    }
    admin.auth().verifyIdToken(token).then(decToken => {
        // Get userdata
        req.user = decToken;
        console.log(decToken);
        return admin.firestore().collection('users').where('userID', '==', req.user.uid).limit(1).get();
    }).then(data => {

        // Return userdata
        req.user.username = data.docs[0].data().username;
        return next();
    }).catch( error => {
        console.error('Error while verifying token ', error);
        return res.status(403).json(error);
    });
};