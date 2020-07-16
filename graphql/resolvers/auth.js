const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
module.exports = {
    registerUser: async (args, req) => {
        try {
            const {
                name,
                email,
                password
            } = args.userInput;
            let user = await User.findOne({
                email
            });
            if (user) {
                throw ('Email already registered');
            }
            user = new User({
                name,
                email,
                password
            });
            user.password = await bcrypt.hash(user.password, 10);
            user = await user.save();
            const payload = {
                id: user.id
            }
            const token = await jwt.sign(payload, process.env.SECRET, {
                expiresIn: '1d'
            });
            return {
                token,
                user: {
                    email,
                    name,
                    password: null
                }
            }
        } catch (e) {
            console.log(e);
            throw new Error(e);
        }
    },
    loginUser: async (args, req) => {
        try {
            const {
                email,
                password
            } = args.userInput;
            let user = await User.findOne({
                email
            });
            if (!user) {

            }
            let isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                throw ('Authentication failed');
            }
            const payload = {
                id: user.id
            }
            const token = await jwt.sign(payload, process.env.SECRET, {
                expiresIn: '1d'
            });
            return {
                token,
                user: {
                    email: user.email,
                    name: user.name,
                    password: null
                }
            }
        } catch (e) {
            console.log(e);
            throw new Error(e);
        }
    },
}