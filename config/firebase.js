const admin = require("firebase-admin");
const serviceAccount = require("../../bizlyf-service-account-file.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
