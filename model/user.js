const mongoose = require("mongoose");
const { SIGNIN_METHODS, SIGNIN_METHOD_MAP } = require("../constants/enums.js");

const UserSchema = new mongoose.Schema(
  {
    signInMethod: {
      type: String,
      enum: SIGNIN_METHODS,
      default: SIGNIN_METHOD_MAP.GOOGLE,
    },
    name: {
      type: String,
      default: "",
    },
    photo: {
      type: String,
      default: "",
    },
    dob: {
      type: String,
    },
    gender: {
      type: String,
    },
    countryCode: {
      type: String,
      default: "+91",
    },
    phone: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      default: "",
    },
    referralCode: {
      type: String,
      default: "",
    },
    createdAt: {
      type: String,
    },
    updatedAt: {
      type: String,
    },
    active: {
      type: Boolean,
      default: true,
    },
    firebaseUid: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const User = mongoose.model("user", UserSchema);
module.exports = User;
