const express = require("express");
const cors = require("cors");
const http = require("http");
const config = require("./config");
const logger = require("./logger");

const requestIdMiddleware = require("../middleware/requestIdMiddleware");
const logMiddleware = require("../middleware/logMiddleware");

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const serverInsecure = http.createServer(app);
serverInsecure.listen(config.HTTP_PORT, () =>
  logger.info(`App listening on port ${config.HTTP_PORT}`)
);
app.use(requestIdMiddleware);
app.use(logMiddleware);

module.exports = {
  app,
  serverInsecure,
};
