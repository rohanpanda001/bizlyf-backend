const { app } = require("./app");
const userAuth = require("../middleware/userAuth");
const userRoutes = require("../routes/userRoutes");

app.get("/health", (req, res) => {
  console.log("health check request received");
  const healthInfo = {
    status: "UP",
    uptime: process.uptime(),
  };
  res.json(healthInfo);
});

app.use("/users", userRoutes);
// app.use("/transactions", userAuth, transactionRoutes);
