const logger = require("../config/logger");
const userService = require("../service/user");

async function userLogin(req, res) {
  const { email, name, photo, phone, signInMethod, firebaseUid } = req.body;
  logger.info(`userLogin api called with providerId=${firebaseUid}`);
  const data = {
    email,
    name,
    photo,
    firebaseUid,
    phone,
    signInMethod,
  };
  const user = await userService.userLogin({ data });
  logger.info(`userLogin api returned with response=${JSON.stringify(user)}`);
  return res.send({ ...user });
}

async function updateUser(req, res) {
  const { userId } = req.params;
  logger.info(`updateUser api called with user=${userId}`);
  const updated = await userService.updateUser({ userId, data: req.body });
  logger.info(
    `updateUser api returned with response=${JSON.stringify(updated)}`
  );
  return res.send({ ...updated });
}

async function fetchUserDetail(req, res) {
  const { userId } = req.params;
  logger.info(`fetchUserDetail api called with user=${userId}`);
  const { user } = res;
  const userData = await userService.fetchUserDetail({ userId, user });
  logger.info(
    `fetchUserDetail api returned with response=${JSON.stringify(userData)}`
  );
  return res.send({ user: userData });
}

async function userLogout(req, res) {
  const { userId } = req.params;
  const { user } = res;
  logger.info(`userLogout api called with user=${userId}`);
  const loggedOutUser = await userService.userLogout({ userId, user });
  logger.info(
    `userLogout api returned with response=${JSON.stringify(loggedOutUser)}`
  );
  return res.send({ user: loggedOutUser });
}

module.exports = {
  userLogin,
  updateUser,
  userLogout,
  fetchUserDetail,
};
