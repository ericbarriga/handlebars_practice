const router = require('express').Router();
const {
    createUser,
    getAllUsers,
    getUserById,
} = require('../../../controllers/userController')

// api/users ;
router.route('/')
    .get(getAllUsers)
    .post(createUser)

router.route('/:userId')
    .get(getUserById)

module.exports = router;