const logger = require("../config/logger");

const logMiddleware = (req, res, next) => {
  logger.defaultMeta = { ...logger.defaultMeta, requestId: req.requestId };
  next();
};

module.exports = logMiddleware;
