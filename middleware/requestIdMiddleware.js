const { v4: uuidv4 } = require("uuid");

function requestIdMiddleware(req, res, next) {
  if (!req.requestId) {
    req.requestId = uuidv4();
  }
  next();
}

module.exports = requestIdMiddleware;
