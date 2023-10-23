
const express  = require('express')
const router = express.Router()
const { 
  getUser, 
  getUserId,
  deleteUser,
  addUser, 
  editUser,
  loginUser 
} = require('./controller')

router.route('/').get(getUser).post(addUser)

router.route('/:id').get(getUserId).delete(deleteUser).put(editUser)

router.route('/login').post(loginUser)

module.exports = router
