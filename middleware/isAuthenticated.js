const jwt = require('jsonwebtoken');
module.exports = async (req, res, next) => {
    try {
        const token = req.headers['x-auth-token'];
        if (!token || token.trim().length === 0) {
            req.isAuth = false;
            return next();
        }
        const decoded = jwt.verify(token, process.env.SECRET);
        if (!decoded) {
            req.isAuth = false;
            return next();
        }
        req.isAuth = true;
        req.userID = decoded.id;
        next();
    } catch (e) {
        console.log(e);
        req.isAuth = false;
        next();
    }
}