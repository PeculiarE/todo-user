const { v4: uuidv4 } = require('uuid');
const { userArray } = require('../models');

const addNewUser = (data) => {
  userArray.push({
    ...data,
    id: uuidv4(),
    isAdmin: false,
  });
};

const getSingleUserById = (id) => userArray.find((el) => el.id === id);

const getSingleUserByEmail = (email) => userArray.find((el) => el.email === email);

const findUserIndex = (id) => userArray.findIndex((el) => el.id === id);

const updateSingleUserProfile = (data, id) => {
  const userDetails = getSingleUserById(id);
  const updatedProfile = {
    ...data,
    ...userDetails,
  };
  const index = findUserIndex(id);
  userArray[index] = updatedProfile;
  return updatedProfile;
};

const deleteUser = (id) => {
  const index = findUserIndex(id);
  return userArray.splice(index, 1);
};

module.exports = {
  addNewUser, getSingleUserById, getSingleUserByEmail, updateSingleUserProfile, deleteUser,
};
