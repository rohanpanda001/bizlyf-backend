module.exports = {
  firebaseAuthError: {
    statusCode: 403,
    message: "Could not authorize user",
  },
  bearerTokenInvalid: {
    statusCode: 401,
    message: "Invalid bearer token format",
  },
  noUserTokenFoundError: {
    statusCode: 401,
    message: "No user token provided",
  },
  notFound: {
    statusCode: 404,
    message: "Resource not found.",
  },
  validationError: {
    statusCode: 400,
    message: "Invalid input provided.",
  },
  genericError: {
    statusCode: 500,
    message: "Something went wrong. Please try again later",
  },
  userNotFoundError: {
    statusCode: 404,
    message: "No user found",
  },
  invalidUserDetailsError: {
    statusCode: 400,
    message: "Invalid login details",
  },
  sameEmailUserExistsError: {
    statusCode: 400,
    message: "User with this Email address exists",
  },
  unauthorizedUserError: {
    statusCode: 401,
    message: "You are not authorized for this action",
  },
};
