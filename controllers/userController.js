const {
    User
} = require('../models')

module.exports = {
    createUser: async (req, res) => {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).jsson({ error: 'need username and password' });
        }
        try {
            const user = await User.create({
                username,
                email,
                password,
            });
            res.json(user);
        } catch (error) {
            res.json({ error })
        }
    },

    // getting all users ;
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll({});
            res.json(users);
        } catch (error) {
            res.json(error)
        }
    },
}