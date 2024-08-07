const mongoose = require("mongoose");
const bluebird = require("bluebird");
const config = require("./config");
const logger = require("./logger");

const url = config.MONGODB_URI;
mongoose.Promise = bluebird;
mongoose.connect(url, {
  // autoReconnect: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("connecting", () => logger.info("Connecting to MongoDB."));

db.on("error", (error) => {
  logger.error(`Error in MongoDB connection: ${error}`);
  mongoose.disconnect();
});

db.on("connected", () => {
  logger.info("Connected to MongoDB!");
});

module.exports = db;
