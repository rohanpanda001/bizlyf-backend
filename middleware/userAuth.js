const AppError = require("../exception/appError");
const errorConfig = require("../exception/errorConfig");
const { verifyFirebaseToken } = require("../utils/firebaseUtils");
const userService = require("../service/user");

async function userAuth(req, res, next) {
  try {
    const jwtToken = extractJwtToken(req.headers.authorization);
    const decodedToken = await verifyFirebaseToken(jwtToken);
    const user = await userService.findAndUpdateUser({ decodedToken });
    res.user = user;
    next();
  } catch (error) {
    next(error);
  }
}

function extractJwtToken(bearerToken) {
  if (!bearerToken || !bearerToken.startsWith("Bearer ")) {
    throw new AppError(errorConfig.noUserTokenFoundError);
  }
  return bearerToken.split(" ")[1];
}

module.exports = userAuth;
