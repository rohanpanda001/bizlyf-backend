const logger = require("../config/logger");
const AppError = require("../exception/appError");
const errorConfig = require("../exception/errorConfig");
const userRepository = require("../repository/user");

function getUserSearchQuery({ data }) {
  const userSearchQuery = { $or: [] };

  if (data.firebaseUid) {
    userSearchQuery.$or.push({ firebaseUid: data.firebaseUid, active: true });
  }

  if (data.email) {
    userSearchQuery.$or.push({ email: data.email, active: true });
  }
  return userSearchQuery;
}

async function userLogin({ data }) {
  if (!data.firebaseUid || !data.email) {
    throw new AppError(errorConfig.invalidUserDetailsError);
  }

  const userSearchQuery = getUserSearchQuery({ data });
  const [userFound] = await userRepository.searchUser({
    searchQuery: userSearchQuery,
  });

  if (userFound) {
    logger.info(`found existing user, user=${userFound._id.toString()}`);
    return { existing: true, user: userFound };
  }
  const userCreatePayload = {
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  const user = await userRepository.createUser({ data: userCreatePayload });

  return { created: true, user };
}

async function updateUser({ userId, data }) {
  const userObj = await userRepository.findUserById({ userId });
  const payload = { ...data };
  if (userObj.email && payload.email) {
    delete payload.email;
  }
  if (Object.keys(payload).length) {
    if (payload.email) {
      const [existingEmailUser] = await userRepository.findActiveUserByEmail({
        email: payload.email,
      });
      if (existingEmailUser) {
        throw new AppError(errorConfig.sameEmailUserExistsError);
      }
    }
    await userRepository.updateUser({ userId, data: payload });
  }
  return { updated: true };
}

async function fetchUserDetail({ userId, user }) {
  if (userId !== user._id.toString()) {
    throw new AppError(errorConfig.unauthorizedUserError);
  }
  return user;
}

async function userLogout({ userId, user }) {
  if (userId !== user._id.toString()) {
    throw new AppError(errorConfig.unauthorizedUserError);
  }
  const logoutPayload = { active: false };
  await userRepository.updateUser({ userId, data: logoutPayload });
  return user;
}

module.exports = {
  userLogin,
  updateUser,
  userLogout,
  fetchUserDetail,
};
