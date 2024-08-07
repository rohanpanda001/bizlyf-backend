const admin = require("firebase-admin");
const logger = require("../config/logger");
const AppError = require("../exception/appError");
const errorConfig = require("../exception/errorConfig");

async function verifyFirebaseToken(jwtToken) {
  try {
    const decodedToken = await admin.auth().verifyIdToken(jwtToken);
    logger.info(`decodedToken=${JSON.stringify(decodedToken)}`);
    return decodedToken;
  } catch (error) {
    logger.error(
      `error while verifying firebase token, err=${JSON.stringify(error)}`
    );
    throw new AppError(errorConfig.firebaseAuthError);
  }
}

module.exports = { verifyFirebaseToken };
