const Log = require('../../models/logs');
const User = require('../../models/user');
module.exports = {
    logs: async (args, req) => {
        try {

        } catch (e) {

        }
    },
    createLog: async (args, req) => {
        try {
            const {
                message,
                attention,
                tech: {
                    email
                }
            } = args.logInput;
            let user = await User.findOne({
                email
            });
            let log = new Log({
                message,
                attention,
                tech: user.id
            });
            log = await log.save();
            return {
                ...log._doc,
                tech: user
            }
        } catch (e) {
            console.log(e);
            throw new Error(e);
        }
    },
    updateLog: async (args, req) => {
        try {

        } catch (e) {

        }
    },
    deleteLog: async (args, req) => {
        try {

        } catch (e) {

        }
    }
}