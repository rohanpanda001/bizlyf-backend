const User = require("../model/user");

async function updateUser({ userId, data }) {
  return User.updateOne({ _id: userId }, { ...data });
}
async function searchUser({ searchQuery }) {
  return User.find({ ...searchQuery });
}
async function createUser({ data }) {
  return User.create({ ...data });
}
async function findUserById({ userId }) {
  return User.findById(userId);
}
async function findUsers({ userIdList }) {
  return User.find({ userId: { $in: userIdList } });
}
async function findActiveUserByToken({ token }) {
  return User.find({ token, active: true });
}

async function findActiveUserByFirebaseUid({ firebaseUid }) {
  return User.find({ firebaseUid, active: true });
}
async function findActiveUserByEmail({ email }) {
  return User.find({ email, active: true });
}
module.exports = {
  updateUser,
  searchUser,
  createUser,
  findUserById,
  findUsers,
  findActiveUserByToken,
  findActiveUserByEmail,
  findActiveUserByFirebaseUid,
};
