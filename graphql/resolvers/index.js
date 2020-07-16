const authResolvers = require('./auth');
const logResolvers = require('./logs');
module.exports = {
    ...authResolvers,
    ...logResolvers
}