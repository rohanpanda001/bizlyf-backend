const express = require("express");

const router = express.Router();
const userAuth = require("../middleware/userAuth");
const userHandler = require("../handlers/user");
const catchAsync = require("../exception/catchAsync");

router.post("", catchAsync(userHandler.userLogin));

router.put("/:userId", catchAsync(userHandler.updateUser));

router.delete("/:userId", userAuth, catchAsync(userHandler.userLogout));

module.exports = router;
