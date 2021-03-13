const { generateUUID } = require('../utils');
const db = require('../db/setup');
const { insertUser, getUserByEmail } = require('../db/queries/user');

const addNewUser = async (data) => {
  const id = generateUUID();
  const {
    email, firstName, lastName, password, gender,
  } = data;
  return db.one(insertUser, [id, email, firstName, lastName, password, gender]);
};

const getSingleUserByEmail = async (email) => db.oneOrNone(getUserByEmail, [email]);

// const getSingleUserById

// const findUserIndex

// const updateSingleUserProfile

// const deleteUser

module.exports = {
  addNewUser, getSingleUserByEmail,
};
