const { Router } = require('express')
const {
    getUsers,
    getUserById,
    postUser,
    putUserById,
    deleteUserById,
} = require('../controllers')

const router = Router()

router.get('/users', getUsers)
router.get('/users/:id', getUserById)
router.post('/users', postUser)
router.put('/users/:id', putUserById)
router.delete('/users/:id', deleteUserById)

module.exports = router
