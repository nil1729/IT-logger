const Log = require('../../models/logs');
const User = require('../../models/user');
module.exports = {
    techs: async (args, req) => {
        try {
            if (!req.isAuth) {
                throw ('Unauthorized Request');
            }
            const users = await User.find().select('-password').sort({
                name: -1
            });
            return users;
        } catch (e) {
            console.log(e);
            throw new Error(e);
        }
    },
    logs: async (args, req) => {
        try {
            if (!req.isAuth) {
                throw ('Unauthorized Request');
            }
            const logs = await Log.find().populate('tech').sort({
                updatedAt: -1
            });
            return logs;
        } catch (e) {
            console.log(e);
            throw new Error(e);
        }
    },
    createLog: async (args, req) => {
        try {
            if (!req.isAuth) {
                throw ('Unauthorized Request');
            }
            const {
                message,
                attention,
                tech,
            } = args.logInput;
            let log = new Log({
                message,
                attention,
                tech,
            });
            log = await log.save();
            const user = await User.findById(tech).select('-password');
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
            if (!req.isAuth) {
                throw ('Unauthorized Request');
            }
            const {
                message,
                attention,
                tech,
            } = args.logInput;
            let log = await Log.updateOne({
                _id: args.id
            }, {
                message,
                attention,
                tech,
            });
            const logs = await Log.find().populate('tech').sort({
                updatedAt: -1
            });
            return logs;
        } catch (e) {
            console.log(e);
            throw new Error(e);
        }
    },
    deleteLog: async (args, req) => {
        try {
            if (!req.isAuth) {
                throw ('Unauthorized Request');
            }
            let log = await Log.findByIdAndDelete(args.id);
            return log;
        } catch (e) {
            console.log(e);
            throw new Error(e);
        }
    }
}