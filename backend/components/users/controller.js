const asyncHandler = require('express-async-handler');
const db = require('../../database/sequelize'); 
const User = db.users;

const getUser = asyncHandler(async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
})
const addUser = asyncHandler(async (req, res) => {
  const newUser = req.body;
  await User.create(newUser);
  res.status(201).send('Created successfully.');
});

const getUserId = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const user = await User.findByPk(userId);
  if (!user) {
    res.status(404).json('No record with given id: ' + userId);
  } else {
    res.send(user);
  }
})

const deleteUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const affectedRows = await User.destroy({ where: { id: userId } });
  if (affectedRows === 0) {
    res.status(404).json('No record with given id: ' + userId);
  } else {
    res.send('Deleted successfully.');
  }
})
const editUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;
  const [affectedRows] = await User.update(updatedUser, { where: { id: userId } });
  if (affectedRows === 0) {
    res.status(404).json('No record with given id: ' + userId);
  } else {
    res.send('Updated successfully.');
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    res.status(400).send('Please add all fields');
  } else {
    const user = await User.findOne({ where: { email: email, password: password } });
    if (!user) {
      res.status(400).send('Wrong Credentials');
    } else {
      res.status(200).send('You have successfully logged in!');
    }
  }
});


module.exports = {
  getUser,
  getUserId,
  deleteUser,
  addUser,
  editUser,
  loginUser
}
