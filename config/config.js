require("dotenv").config();

const HTTP_PORT = process.env.HTTP_PORT || 9092;
const HTTPS_PORT = process.env.HTTPS_PORT || 9091;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/bizlyf";
const FIREBASE_KEY = process.env.FIREBASE_KEY || "TEST_KEY";
module.exports = {
  HTTP_PORT,
  HTTPS_PORT,
  MONGODB_URI,
  FIREBASE_KEY,
};
